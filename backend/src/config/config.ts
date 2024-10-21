import dotenv from "dotenv";
import path from "path";
import Joi, { ObjectSchema } from "joi";

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema: ObjectSchema = Joi.object()
  .keys({
    PORT: Joi.number().description("Port number"),
    MONGO_URI: Joi.string().description("MongoDB URI"),
    SECRET_KEY: Joi.string().description("Secret key"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error("Config validation error: " + error.message);
}

interface Config {
  PORT: number;
  MONGO_URI: string;
  SECRET: string;
}

export const config: Config = {
  PORT: envVars.PORT,
  MONGO_URI: envVars.MONGO_URI,
  SECRET: envVars.SECRET_KEY,
};
