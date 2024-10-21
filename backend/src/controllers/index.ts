import {
  applyToCampaign,
  getApplicationsByCampaign,
  updateApplicationStatus,
} from "./application.controller";
import { register, login } from "./auth.controller";
import {
  createCampaign,
  getCampaignsByBrand,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
} from "./campaign.controller";
import {
  uploadSubmission,
  getSubmissionsByApplication,
  updateSubmissionStatus,
} from "./submission.controller";

export const authController = {
  register,
  login,
};

export const campaignController = {
  createCampaign,
  getCampaignsByBrand,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
};

export const applicationController = {
  applyToCampaign,
  getApplicationsByCampaign,
  updateApplicationStatus,
};

export const submissionController = {
  uploadSubmission,
  getSubmissionsByApplication,
  updateSubmissionStatus,
};
