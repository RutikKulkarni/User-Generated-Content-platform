import {
  applyToCampaign,
  getApplicationsByCampaign,
  updateApplicationStatus,
} from "./application.service";
import { registerUser, loginUser, resetUserPass } from "./auth.service";
import {
  newCampaign,
  fetchCampaignsByBrand,
  fetchCampaignById,
  updateCampaign,
  deleteCampaign,
} from "./campaign.service";
import {
  uploadSubmission,
  getSubmissionsByApplication,
  updateSubmissionStatus,
} from "./submission.service";
import { generateAuthToken } from "./token.service";

export const authService = { registerUser, loginUser, resetUserPass };
export const tokenService = { generateAuthToken };

export const campaignService = {
  newCampaign,
  fetchCampaignsByBrand,
  fetchCampaignById,
  updateCampaign,
  deleteCampaign,
};

export const applicationService = {
  applyToCampaign,
  getApplicationsByCampaign,
  updateApplicationStatus,
};

export const submissionService = {
  uploadSubmission,
  getSubmissionsByApplication,
  updateSubmissionStatus,
};
