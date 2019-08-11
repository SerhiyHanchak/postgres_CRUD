const User = require("../models/user");
const user = new User();

module.exports = async function findById(req, res, next) {
  const { id } = req.params;
  
  try {
    if (!isNaN(id)) {
      const result = await user.findUserById(id);
      if (result.length != 0) {
        return res.json(result);
      } else {
        return res
          .status(400)
          .send({ message: `There is no user with id: ${id}` });
      }
    } else {
      return res.status(400).send({ message: "Not valid ID" });
    }
  } catch (err) {
    return next(err);
  }
};
