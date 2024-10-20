import { ApplicationModel } from '../models/applicationModel';

export class ApplicationService {
  async applyToCampaign(data: { user: string; campaign: string; status: string }) {
    const application = new ApplicationModel(data);
    await application.save();
    return application;
  }

  async getApplications() {
    return ApplicationModel.find();
  }
}
