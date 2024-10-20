import mongoose, { Document, Schema } from "mongoose";

export interface ISubmission extends Document {
  user: string;
  campaign: string;
  contentUrl: string;
}

const submissionSchema = new Schema<ISubmission>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  campaign: { type: Schema.Types.ObjectId, ref: "Campaign", required: true },
  contentUrl: { type: String, required: true },
});

export const SubmissionModel = mongoose.model<ISubmission>(
  "Submission",
  submissionSchema
);
