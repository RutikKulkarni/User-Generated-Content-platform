import httpStatus from "http-status";
import { ApiError } from "../utils/ApiError";
import { Campaign } from "../models";

interface NewCampaignProps {
  brandId: string;
  title: string;
  description: string;
  deadline: string;
}

const newCampaign = async ({
  brandId,
  title,
  description,
  deadline,
}: NewCampaignProps) => {
  try {
    const existingCampaign = await Campaign.Model.findOne({ title });

    if (existingCampaign) {
      throw new ApiError(
        "Campaign with this title already exists",
        httpStatus.BAD_REQUEST
      );
    }

    const campaign = await Campaign.Model.create({
      brandId,
      title,
      description,
      deadline,
    });

    if (!campaign) {
      throw new ApiError(
        "Failed to create campaign, Please try again",
        httpStatus.BAD_REQUEST
      );
    }

    return {
      message: "Campaign created successfully",
      campaign,
    };
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

const fetchCampaignsByBrand = async (brandId: string) => {
  try {
    const campaigns = await Campaign.Model.find({ brandId });

    if (!campaigns || !campaigns.length) {
      throw new ApiError("Campaigns not found", httpStatus.NOT_FOUND);
    }

    return {
      message: "Campaigns fetched successfully",
      campaigns,
    };
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

const fetchCampaignById = async (campaignId: string) => {
  try {
    const campaign = await Campaign.Model.findById(campaignId);

    if (!campaign) {
      throw new ApiError("Campaign not found", httpStatus.NOT_FOUND);
    }

    return {
      message: "Campaign fetched successfully",
      campaign,
    };
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

interface UpdateCampaignProps {
  title?: string;
  description?: string;
  deadline?: string;
}

const updateCampaign = async (
  data: UpdateCampaignProps,
  campaignId: string
) => {
  try {
    const campaign = await Campaign.Model.findByIdAndUpdate(campaignId, data, {
      new: true,
    });

    if (!campaign) {
      throw new ApiError("Campaign not found", httpStatus.NOT_FOUND);
    }

    return {
      message: "Campaign updated successfully",
      campaign,
    };
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

const deleteCampaign = async (campaignId: string) => {
  try {
    const campaign = await Campaign.Model.findByIdAndDelete(campaignId, {
      new: true,
    });

    if (!campaign) {
      throw new ApiError("Campaign not found", httpStatus.NOT_FOUND);
    }

    return {
      message: "Campaign deleted successfully",
      campaign,
    };
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

export {
  newCampaign,
  fetchCampaignsByBrand,
  fetchCampaignById,
  updateCampaign,
  deleteCampaign,
};
