import Joi from "joi";

export const uberLoginPostBody = Joi.object()
  .keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  })
  .required();

export const uberProfileGetParams = Joi.object()
  .keys({
    accessToken: Joi.string().required(),
  })
  .required();
