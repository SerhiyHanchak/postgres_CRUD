const Joi = require('@hapi/joi');

const schema = Joi.object().keys({
    firstName: Joi.string(),
    lastName: Joi.string().min(3).max(20),
    age: Joi.number().integer().min(18).max(110),
    gender: Joi.string().valid(["Male","Female"]),
    login: Joi.string().min(3).max(20)
})

module.exports = schema;