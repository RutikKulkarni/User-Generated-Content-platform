import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import Jwt from "jsonwebtoken";
import { config } from "../config/config";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const auth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const token: string | undefined =
    authorization && authorization.split(" ")[1];

  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).send({
      message: "Unauthorized access",
      statusCode: httpStatus.UNAUTHORIZED,
    });
  }

  Jwt.verify(token, config.SECRET, async (err, user) => {
    if (err) {
      return res
        .status(httpStatus.FORBIDDEN)
        .send({ message: err.message, statusCode: httpStatus.FORBIDDEN });
    }
    req.user = user;
    next();
  });
};

export { auth };
