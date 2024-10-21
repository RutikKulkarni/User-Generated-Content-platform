import mongoose, { Document } from "mongoose";

/**
 * Interface representing a submission document in MongoDB.
 */
interface SubmissionDocument extends Document {
  application_id: mongoose.Types.ObjectId;
  content_url: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  submitted_at: Date;
  approved_at?: Date;
}

/**
 * Mongoose schema for the submission model.
 */
const submissionSchema = new mongoose.Schema<SubmissionDocument>({
  application_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Application",
    required: true,
  },
  content_url: {
    type: String,
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
 * Mongoose model for the submission.
 */
const submissionModel = mongoose.model<SubmissionDocument>(
  "Submission",
  submissionSchema
);

export { submissionModel, SubmissionDocument };
