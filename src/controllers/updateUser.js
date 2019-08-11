const User = require("../models/user");
const user = new User();
const validate = require('../utils/validateObject')
const schema = require('../schemas/updateSchema')

module.exports = async function updateUserById(req, res, next) {
  const { id } = req.params;
  const { firstName, lastName, age, gender,login } = req.body;
  try {
    await validate({ firstName, lastName, age, gender, login },schema)
    const result = await user.updateUser(id,{ firstName, lastName, age, gender,login });
    return res.json({updated:true, message:`user with id:${id} was successfully updated`});
  } catch (err) {
    return next(err);
  }
};
