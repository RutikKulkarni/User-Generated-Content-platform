import express, { Request, Response } from "express";
import { auth } from "../middlewares/auth";
import { submissionController } from "../controllers";

const router = express.Router();

router.post("/", auth, (req: Request, res: Response) =>
  submissionController.uploadSubmission(req, res)
);

router.get("/:submissionId", auth, (req: Request, res: Response) =>
  submissionController.getSubmissionsByApplication(req, res)
);

router.patch("/:submissionId/status", auth, (req: Request, res: Response) =>
  submissionController.updateSubmissionStatus(req, res)
);

export default router;
