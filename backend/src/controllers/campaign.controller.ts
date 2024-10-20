import { Request, Response } from "express";
import { CampaignService } from "../services/campaign.services";

const campaignService = new CampaignService();

export const createCampaign = async (req: Request, res: Response) => {
  try {
    const campaign = await campaignService.createCampaign(req.body);
    res.status(201).json(campaign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getCampaigns = async (req: Request, res: Response) => {
  try {
    const campaigns = await campaignService.getCampaigns();
    res.status(200).json(campaigns);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
