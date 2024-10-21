import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import Joi from "joi";

const validateBody =
  (schema: Joi.Schema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .send({ message: error.message });
    }

    next();
  };

export { validateBody };
