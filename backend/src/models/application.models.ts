import mongoose, { Document } from "mongoose";

/**
 * Interface representing an application document in MongoDB.
 */
interface ApplicationDocument extends Document {
  creator_id: mongoose.Types.ObjectId;
  campaign_id: mongoose.Types.ObjectId;
  status: "PENDING" | "APPROVED" | "REJECTED";
  submitted_at: Date;
  approved_at?: Date;
}

/**
 * Mongoose schema for the application model.
 */
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

/**
 * Mongoose model for the application.
 */
const applicationModel = mongoose.model<ApplicationDocument>(
  "Application",
  applicationSchema
);

export { applicationModel, ApplicationDocument };
