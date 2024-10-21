import { Router, Request, Response } from "express";
import { authController } from "../controllers";
import { validate } from "../middlewares";
import { authValidation } from "../validations";
import { auth } from "../middlewares/auth";

const router = Router();

router.post(
  "/register",
  validate.body(authValidation.register),
  (req: Request, res: Response) => authController.register(req, res)
);

router.post(
  "/login",
  auth,
  validate.body(authValidation.login),
  (req: Request, res: Response) => authController.login(req, res)
);

export default router;
