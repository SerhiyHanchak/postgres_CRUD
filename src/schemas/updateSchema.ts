import * as Joi from '@hapi/joi';

let schema = Joi.object().keys({
    firstName: Joi.string(),
    lastName: Joi.string().min(3).max(20),
    age: Joi.number().integer().min(18).max(110),
    gender: Joi.string().valid(["Male", "Female"]),
    login: Joi.string().min(3).max(20),
    password: Joi.string().min(5).max(20)
})

export default schema;