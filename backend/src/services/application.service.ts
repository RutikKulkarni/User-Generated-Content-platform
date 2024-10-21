import httpStatus from "http-status";
import { ApiError } from "../utils/ApiError";
import { Application } from "../models";

const applyToCampaign = async (creator_id: string, campaign_id: string) => {
  try {
    const application = await Application.Model.create({
      creator_id,
      campaign_id,
    });

    return {
      message: "Application submitted",
      application,
    };
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

const getApplicationsByCampaign = async (campaign_id: string) => {
  try {
    const applications = await Application.Model.find({ campaign_id }).populate(
      "creator_id"
    );

    if (!applications || !applications.length) {
      throw new ApiError("Applications not found", httpStatus.NOT_FOUND);
    }

    return {
      message: "Application fetched successfully",
      applications,
    };
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

const updateApplicationStatus = async (
  applicationId: string,
  status: string
) => {
  try {
    const application = await Application.Model.findByIdAndUpdate(
      applicationId,
      { status },
      { new: true }
    );

    if (!application) {
      throw new ApiError("Application not found", httpStatus.NOT_FOUND);
    }

    return {
      message: "Application updated successfully",
      application,
    };
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

export { applyToCampaign, getApplicationsByCampaign, updateApplicationStatus };
