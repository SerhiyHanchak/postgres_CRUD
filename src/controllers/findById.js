const User = require("../models/user");
const user = new User();

module.exports = async function findById(req, res, next) {
  const { id } = req.params;
  try {
    const result = await user.findUserById(id);
    if (result != undefined) {
      return res.json(result);
    } else {
      return res.status(400).send({ message: `There is no user with id: ${id}` });
    }
  } catch (err) {
    return next(err);
  }
};
