import mongoose, { Document, Schema } from 'mongoose';

export interface ICampaign extends Document {
  title: string;
  description: string;
  creator: string;
}

const campaignSchema = new Schema<ICampaign>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export const CampaignModel = mongoose.model<ICampaign>('Campaign', campaignSchema);
