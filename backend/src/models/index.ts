import { applicationModel } from "./application.model";
import { campaignModel } from "./campaign.model";
import { submissionModel } from "./submission.model";
import { userModel } from "./user.model";

// Export an object with a 'Model' property referencing the userModel
export const User = { Model: userModel };

// Export an object with a 'Model' property referencing the campaignModel
export const Campaign = { Model: campaignModel };

// Export an object with a 'Model' property referencing the applicationModel
export const Application = { Model: applicationModel };

// Export an object with a 'Model' property referencing the submissionModel
export const Submission = { Model: submissionModel };
