import Joi from "joi";

const password = (value: string, helpers: Joi.CustomHelpers) => {
  if (value.length < 8) {
    return helpers.error("Password must be at least 8 characters long");
  }

  if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
    return helpers.error(
      "Password must contain at least 1 letter and 1 number"
    );
  }
  return value;
};

export { password };
