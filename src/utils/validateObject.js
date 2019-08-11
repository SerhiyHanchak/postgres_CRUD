const Joi = require("@hapi/joi");
const createError = require("http-errors");

module.exports = async function validation(object, schema) {
  try {
    const result = await Joi.validate(object, schema, { abortEarly: false });
    return object;
  } catch (err) {
    throw new createError(
      400,
      `Bad request - validation failed: ${err.message}`
    );
  }
};
