import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import httpStatus from "http-status";
import { submissionService } from "../services";

/**
 * Upload a submission.
 *
 * @param {Request} req - The request object, containing submission data in req.body.
 * @param {Response} res - The response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the created submission result in the response.
 */
const uploadSubmission = catchAsync(async (req: Request, res: Response) => {
  const data = req.body; // Extracting submission data from request body
  const result = await submissionService.uploadSubmission(data);
  return res.status(httpStatus.CREATED).send(result);
});

/**
 * Get submissions for a specific application.
 *
 * @param {Request} req - The request object, containing applicationId in req.params.
 * @param {Response} res - The response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the submissions for the specified application in the response.
 */
const getSubmissionsByApplication = catchAsync(
  async (req: Request, res: Response) => {
    const { submissionId } = req.params; // Extracting submissionId from request parameters
    const result = await submissionService.getSubmissionsByApplication(
      submissionId
    );
    return res.status(httpStatus.OK).send(result);
  }
);

/**
 * Update the status of a specific submission.
 *
 * @param {Request} req - The request object, containing submissionId in req.params and status in req.body.
 * @param {Response} res - The response object used to send back the desired HTTP response.
 * @returns {Promise<void>} Sends the updated submission result in the response.
 */
const updateSubmissionStatus = catchAsync(
  async (req: Request, res: Response) => {
    const { submissionId } = req.params; // Extracting submissionId from request parameters
    const { status } = req.body; // Extracting status from request body
    const result = await submissionService.updateSubmissionStatus(
      submissionId,
      status
    );
    return res.status(httpStatus.OK).send(result);
  }
);

export {
  uploadSubmission,
  getSubmissionsByApplication,
  updateSubmissionStatus,
};
