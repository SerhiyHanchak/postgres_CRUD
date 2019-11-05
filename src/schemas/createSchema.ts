import * as Joi from '@hapi/joi';

let schema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().min(3).max(20).required(),
    age: Joi.number().integer().min(18).max(110).required(),
    gender: Joi.string().valid(["Male","Female"]).required(),
    login: Joi.string().min(3).max(20).required()
})

export default schema;