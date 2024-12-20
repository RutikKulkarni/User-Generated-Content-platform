import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../utils/catchAsync";
import { authService, tokenService } from "../services";

const register = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await authService.registerUser(data);

  return res.status(httpStatus.CREATED).send({
    message: "User registered successfully",
    data: result,
  });
});

const login = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const result = await authService.loginUser(data);

  const token = await tokenService.generateAuthToken(result);

  return res.status(httpStatus.OK).send({
    message: "User loggedIn successfully",
    data: result,
    tokenDetails: token,
  });
});

export { register, login };
