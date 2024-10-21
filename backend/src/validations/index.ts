import { register, login, resetPassword } from "./auth.validation";
import { createCampaign, updateCampaign } from "./campaign.validation";

export const authValidation = { register, login, resetPassword };
export const campaignValidation = { createCampaign, updateCampaign };
