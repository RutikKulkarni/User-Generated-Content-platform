import Joi from "joi";
import { password } from "./custom.validation";

const register: Joi.ObjectSchema = Joi.object().keys({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required().custom(password),
});

const login: Joi.ObjectSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const resetPassword: Joi.ObjectSchema = Joi.object().keys({
  username: Joi.string().required(),
  newPassword: Joi.string().required(),
});

export { register, login, resetPassword };
