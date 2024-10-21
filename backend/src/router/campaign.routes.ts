import { Request, Response, Router } from "express";
import { auth } from "../middlewares/auth";
import { validate } from "../middlewares";
import { campaignValidation } from "../validations";
import { campaignController } from "../controllers";

const router = Router();

router.post(
  "/create",
  auth,
  validate.body(campaignValidation.createCampaign),
  (req: Request, res: Response) => campaignController.createCampaign(req, res)
);

router.get("/", auth, (req: Request, res: Response) =>
  campaignController.getCampaignsByBrand(req, res)
);

router.get("/:campaignId", auth, (req: Request, res: Response) =>
  campaignController.getCampaignById(req, res)
);

router.patch(
  "/:campaignId",
  auth,
  validate.body(campaignValidation.updateCampaign),
  (req: Request, res: Response) => campaignController.updateCampaign(req, res)
);

router.delete("/:campaignId", auth, (req: Request, res: Response) =>
  campaignController.deleteCampaign(req, res)
);

export default router;
