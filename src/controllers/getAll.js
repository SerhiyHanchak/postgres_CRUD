const User = require("../models/user");
const user = new User();

module.exports = async function getAll(req, res, next) {
  try {
    const result = await user.getAllUsers();
    if (result.length != 0) {
      return res.json(result);
    } else {
      res.json({ message: "The database is empty" });
    }
  } catch (err) {
    return next(err);
  }
};
