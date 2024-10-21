import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import httpStatus from "http-status";
import { applicationService } from "../services";

const applyToCampaign = catchAsync(async (req: Request, res: Response) => {
  const { creator_id } = req.user;
  const { campaign_id } = req.body;
  const result = await applicationService.applyToCampaign(
    creator_id,
    campaign_id
  );
  return res.status(httpStatus.CREATED).send(result);
});

const getApplicationsByCampaign = catchAsync(
  async (req: Request, res: Response) => {
    const { campaignId } = req.params;
    const result = await applicationService.getApplicationsByCampaign(
      campaignId
    );
    return res.status(httpStatus.OK).send(result);
  }
);

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
