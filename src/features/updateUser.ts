import User from "../models/user";
import validate from "../utils/validateObject";
import schema from "../schemas/updateSchema";
import { NextFunction, Request, Response } from 'express';
const user = new User();

async function updateUserById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const { firstName, lastName, age, gender, login } = req.body;

  try {
    await validate({ firstName, lastName, age, gender, login }, schema);
    await user.updateUser(id, {
      firstName,
      lastName,
      age,
      gender,
      login
    });
    return res.json({
      updated: true,
      message: `user with id:${id} was successfully updated`
    });
  } catch (err) {
    return next(err);
  }
};

export default updateUserById;