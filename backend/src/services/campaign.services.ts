import { CampaignModel } from "../models/campagin.models";

export class CampaignService {
  async createCampaign(data: {
    title: string;
    description: string;
    creator: string;
  }) {
    const campaign = new CampaignModel(data);
    await campaign.save();
    return campaign;
  }

  async getCampaigns() {
    return CampaignModel.find();
  }
}
