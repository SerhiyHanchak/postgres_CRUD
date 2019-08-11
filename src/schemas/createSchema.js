const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().min(3).max(20).required(),
    age: Joi.number().integer().min(18).max(110).required(),
    gender: Joi.string().valid(["Male","Female"]).required(),
    login: Joi.string().min(3).max(20).required()
})

module.exports = schema;