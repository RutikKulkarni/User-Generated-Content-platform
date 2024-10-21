import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import httpStatus from "http-status";
import { applicationService } from "../services";

/**
 * Apply to a campaign.
 *
 * @param {Request} req - The request object, containing user information in req.user.
 * @param {Response} res - The response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the created application result in the response.
 */
const applyToCampaign = catchAsync(async (req: Request, res: Response) => {
  const { creator_id } = req.user;
  const { campaign_id } = req.body;
  const result = await applicationService.applyToCampaign(
    creator_id,
    campaign_id
  );
  return res.status(httpStatus.CREATED).send(result);
});

/**
 * Get applications for a specific campaign.
 *
 * @param {Request} req - The request object, containing campaignId in req.params.
 * @param {Response} res - The response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the applications for the specified campaign in the response.
 */
const getApplicationsByCampaign = catchAsync(
  async (req: Request, res: Response) => {
    const { campaignId } = req.params;
    const result = await applicationService.getApplicationsByCampaign(
      campaignId
    );
    return res.status(httpStatus.OK).send(result);
  }
);

/**
 * Update the status of a specific application.
 *
 * @param {Request} req - The request object, containing applicationId in req.params and status in req.body.
 * @param {Response} res - The response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the updated application result in the response.
 */
const updateApplicationStatus = catchAsync(
  async (req: Request, res: Response) => {
    const { applicationId } = req.params;
    const { status } = req.body;
    const result = await applicationService.updateApplicationStatus(
      applicationId,
      status
    );
    return res.status(httpStatus.OK).send(result);
  }
);

export { applyToCampaign, getApplicationsByCampaign, updateApplicationStatus };
