import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { campaignService } from "../services";
import httpStatus from "http-status";

/**
 * Create a new campaign.
 *
 * @param {Request} req - The request object, containing campaign data in req.body and user information in req.user.
 * @param {Response} res - The response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the created campaign result in the response.
 */
const createCampaign = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await campaignService.newCampaign({
    ...data,
    brandId: req.user,
  });
  return res.status(httpStatus.CREATED).send(result);
});

/**
 * Get all campaigns for a specific brand.
 *
 * @param {Request} req - The request object, containing user information in req.user.
 * @param {Response} res - The response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the campaigns for the specified brand in the response.
 */
const getCampaignsByBrand = catchAsync(async (req: Request, res: Response) => {
  const brandId = req.user;
  const result = await campaignService.fetchCampaignsByBrand(brandId);
  return res.status(httpStatus.OK).send(result);
});

/**
 * Get a specific campaign by its ID.
 *
 * @param {Request} req - The request object, containing campaignId in req.params.
 * @param {Response} res - The response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the specified campaign in the response.
 */
const getCampaignById = catchAsync(async (req: Request, res: Response) => {
  const { campaignId } = req.params;
  const result = await campaignService.fetchCampaignById(campaignId);
  return res.status(httpStatus.OK).send(result);
});

/**
 * Update a specific campaign by its ID.
 *
 * @param {Request} req - The request object, containing campaignId in req.params and updated data in req.body.
 * @param {Response} res - The response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the updated campaign result in the response.
 */
const updateCampaign = catchAsync(async (req: Request, res: Response) => {
  const { campaignId } = req.params;
  const data = req.body;
  const result = await campaignService.updateCampaign(data, campaignId);
  return res.status(httpStatus.OK).send(result);
});

/**
 * Delete a specific campaign by its ID.
 *
 * @param {Request} req - The request object, containing campaignId in req.params.
 * @param {Response} res - The response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the result of the deletion in the response.
 */
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
