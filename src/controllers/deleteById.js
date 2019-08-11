const User = require('../models/user');
const user = new User();

module.exports = async function deleteUser(req, res, next) {
  const { id } = req.params;
  
  try {
    const result = await user.deleteUser(id);
    if (result != 0) {
      return res.json({
        removed: true,
        message: `user with id:${id} - was successfully removed`
      });
    } else {
      res.status(400).send({message:`No user with such id:${id}`})
    }
  } catch (err) {
    return next(err);
  }
};