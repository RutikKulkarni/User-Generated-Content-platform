import mongoose, { Document } from "mongoose";

interface ApplicationDocument extends Document {
  creator_id: mongoose.Types.ObjectId;
  campaign_id: mongoose.Types.ObjectId;
  status: "PENDING" | "APPROVED" | "REJECTED";
  submitted_at: Date;
  approved_at?: Date;
}

const applicationSchema = new mongoose.Schema<ApplicationDocument>({
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  campaign_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Campaign",
    required: true,
  },
  status: {
    type: String,
    enum: ["PENDING", "APPROVED", "REJECTED"],
    default: "PENDING",
  },
  submitted_at: {
    type: Date,
    default: Date.now,
  },
  approved_at: {
    type: Date,
  },
});

const applicationModel = mongoose.model<ApplicationDocument>(
  "Application",
  applicationSchema
);

export { applicationModel, ApplicationDocument };
