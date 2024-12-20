import mongoose, { Document } from "mongoose";

interface CampaignDocument extends Document {
  brandId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  deadline: Date;
}

const campaignSchema = new mongoose.Schema<CampaignDocument>(
  {
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const campaignModel = mongoose.model<CampaignDocument>(
  "Campaign",
  campaignSchema
);

export { campaignModel, CampaignDocument };
