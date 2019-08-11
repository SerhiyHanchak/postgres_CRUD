const User = require("../models/user");
const user = new User();

module.exports = async function getAll(req, res, next) {
  try {
    const result = await user.getAllUsers();
    res.json(result);
  } catch (err) {
    return next(err);
  }
};
