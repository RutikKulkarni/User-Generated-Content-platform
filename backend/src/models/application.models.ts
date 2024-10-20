import mongoose, { Document, Schema } from "mongoose";

export interface IApplication extends Document {
  user: string;
  campaign: string;
  status: string;
}

const applicationSchema = new Schema<IApplication>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  campaign: { type: Schema.Types.ObjectId, ref: "Campaign", required: true },
  status: { type: String, required: true },
});

export const ApplicationModel = mongoose.model<IApplication>(
  "Application",
  applicationSchema
);
