import { SubmissionModel } from '../models/submissionModel';

export class SubmissionService {
  async submitContent(data: { user: string; campaign: string; contentUrl: string }) {
    const submission = new SubmissionModel(data);
    await submission.save();
    return submission;
  }

  async getSubmissions() {
    return SubmissionModel.find();
  }
}
