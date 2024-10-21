import Joi from "joi";

const createCampaign: Joi.ObjectSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  deadline: Joi.string().required(),
});

const updateCampaign: Joi.ObjectSchema = Joi.object().keys({
  title: Joi.string(),
  description: Joi.string(),
  deadline: Joi.string(),
});

export { createCampaign, updateCampaign };
