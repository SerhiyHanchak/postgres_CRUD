const User = require('../models/user')
const user = new User()
const validate = require('../utils/validateObject')
const schema = require('../schemas/createSchema')

module.exports = async function createUser(req, res, next) {
  const { firstName, lastName, age, gender, login } = req.body;
  try {
    await validate({firstName, lastName, age, gender, login},schema)
    const result = await user.createUser({ firstName, lastName, age, gender ,login});
    return res.json({created:true, message:'user was successfully created'});
  } catch (err) {
    return next(err);
  }
};