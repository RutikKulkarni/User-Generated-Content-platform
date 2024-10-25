import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { campaignService } from "../services";
import httpStatus from "http-status";

const createCampaign = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await campaignService.newCampaign({
    ...data,
    brandId: req.user.sub,
  });
  return res.status(httpStatus.CREATED).send(result);
});

const getCampaignsByBrand = catchAsync(async (req: Request, res: Response) => {
  const brandId = req.user.sub;
  const result = await campaignService.fetchCampaignsByBrand(brandId);
  return res.status(httpStatus.OK).send(result);
});

const getCampaignById = catchAsync(async (req: Request, res: Response) => {
  const { campaignId } = req.params;
  const result = await campaignService.fetchCampaignById(campaignId);
  return res.status(httpStatus.OK).send(result);
});

const updateCampaign = catchAsync(async (req: Request, res: Response) => {
  const { campaignId } = req.params;
  const data = req.body;
  const result = await campaignService.updateCampaign(data, campaignId);
  return res.status(httpStatus.OK).send(result);
});

const deleteCampaign = catchAsync(async (req: Request, res: Response) => {
  const { campaignId } = req.params;
  const result = await campaignService.deleteCampaign(campaignId);
  return res.status(httpStatus.OK).send(result);
});

export {
  createCampaign,
  getCampaignsByBrand,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
};
