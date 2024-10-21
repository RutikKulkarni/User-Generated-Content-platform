import httpStatus from "http-status";
import { ApiError } from "../utils/ApiError";
import { Submission } from "../models";

const uploadSubmission = async (data: {
  application_id: string;
  content_url: string;
}) => {
  try {
    const submission = await Submission.Model.create(data);

    if (!submission) {
      throw new ApiError(
        "Failed to create submission, please try again.",
        httpStatus.BAD_REQUEST
      );
    }

    return {
      message: "Submission uploaded successfully.",
      submission,
    };
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

const getSubmissionsByApplication = async (submissionId: string) => {
  try {
    const submissions = await Submission.Model.find({ _id: submissionId });

    if (!submissions || !submissions.length) {
      throw new ApiError("Submission not found", httpStatus.NOT_FOUND);
    }

    return {
      message: "Submissions fetched successfully.",
      submissions,
    };
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

const updateSubmissionStatus = async (submissionId: string, status: string) => {
  try {
    const submission = await Submission.Model.findByIdAndUpdate(
      submissionId,
      { status },
      { new: true }
    );

    if (!submission) {
      throw new ApiError(
        "Failed to update submission, please try again.",
        httpStatus.BAD_REQUEST
      );
    }

    return {
      message: "Submission updated successfully.",
      submission,
    };
  } catch (err: any) {
    throw new ApiError(
      `Error: ${err.message}`,
      err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
    );
  }
};

export {
  uploadSubmission,
  getSubmissionsByApplication,
  updateSubmissionStatus,
};
