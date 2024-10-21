import { Request, Response } from "express";
import httpStatus from "http-status";

const catchAsync =
  (fn: Function): Function =>
  (req: Request, res: Response) => {
    Promise.resolve(fn(req, res)).catch((err) => {
      return res.status(err.statusCode || httpStatus.BAD_REQUEST).send({
        message: err.message,
        statusCode: err.statusCode || httpStatus.BAD_REQUEST,
      });
    });
  };

export { catchAsync };
