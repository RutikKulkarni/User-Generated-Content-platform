import { Request, Response } from 'express';
import { ApplicationService } from '../services/application.services';

const applicationService = new ApplicationService();

export const applyToCampaign = async (req: Request, res: Response) => {
  try {
    const application = await applicationService.applyToCampaign(req.body);
    res.status(201).json(application);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getApplications = async (req: Request, res: Response) => {
  try {
    const applications = await applicationService.getApplications();
    res.status(200).json(applications);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
