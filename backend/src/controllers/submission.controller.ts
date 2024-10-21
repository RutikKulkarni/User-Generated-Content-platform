import { Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import httpStatus from "http-status";
import { submissionService } from "../services";

const uploadSubmission = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await submissionService.uploadSubmission(data);
  return res.status(httpStatus.CREATED).send(result);
});

const getSubmissionsByApplication = catchAsync(
  async (req: Request, res: Response) => {
    const { submissionId } = req.params;
    const result = await submissionService.getSubmissionsByApplication(
      submissionId
    );
    return res.status(httpStatus.OK).send(result);
  }
);

const updateSubmissionStatus = catchAsync(
  async (req: Request, res: Response) => {
    const { submissionId } = req.params;
    const { status } = req.body;
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
