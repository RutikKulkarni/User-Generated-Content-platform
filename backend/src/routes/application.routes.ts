import express, { Request, Response } from "express";
import { auth } from "../middlewares/auth";
import { applicationController } from "../controllers";

const router = express.Router();

router.post("/", auth, (req: Request, res: Response) =>
  applicationController.applyToCampaign(req, res)
);

router.get("/:campaignId", auth, (req: Request, res: Response) =>
  applicationController.getApplicationsByCampaign(req, res)
);

router.patch("/:applicationId/status", auth, (req: Request, res: Response) =>
  applicationController.updateApplicationStatus(req, res)
);

export default router;
