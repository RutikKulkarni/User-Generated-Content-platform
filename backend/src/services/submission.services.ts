import { SubmissionModel } from "../models/submission.models";

export class SubmissionService {
  async submitContent(data: {
    user: string;
    campaign: string;
    contentUrl: string;
  }) {
    const submission = new SubmissionModel(data);
    await submission.save();
    return submission;
  }

  async getSubmissions() {
    return SubmissionModel.find();
  }
}
