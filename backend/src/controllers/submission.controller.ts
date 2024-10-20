import { Request, Response } from 'express';
import { SubmissionService } from '../services/submission.services';

const submissionService = new SubmissionService();

export const submitContent = async (req: Request, res: Response) => {
  try {
    const submission = await submissionService.submitContent(req.body);
    res.status(201).json(submission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getSubmissions = async (req: Request, res: Response) => {
  try {
    const submissions = await submissionService.getSubmissions();
    res.status(200).json(submissions);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
