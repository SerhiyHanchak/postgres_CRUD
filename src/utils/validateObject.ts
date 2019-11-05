import Joi from "@hapi/joi";
import createError from "http-errors";

async function validation(object: object, schema: object) {
  try {
    await Joi.validate(object, schema, { abortEarly: false });
    return object;
  } catch (err) {
    throw new createError(
      400,
      `Bad request - validation failed: ${err.message}`
    );
  }
};

export default validation;
