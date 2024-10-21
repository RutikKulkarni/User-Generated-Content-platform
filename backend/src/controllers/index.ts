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

// Export an object with multiple authentication controller methods
export const authController = {
  register,
  login,
};

// Export an object with multiple campaign controller methods
export const campaignController = {
  createCampaign,
  getCampaignsByBrand,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
};

// Export an object with multiple application controller methods
export const applicationController = {
  applyToCampaign,
  getApplicationsByCampaign,
  updateApplicationStatus,
};

// Export an object with multiple submission controller methods
export const submissionController = {
  uploadSubmission,
  getSubmissionsByApplication,
  updateSubmissionStatus,
};
