import User from '../models/user';
import validate from '../utils/validateObject';
import schema from '../schemas/createSchema';
import { NextFunction, Request, Response } from 'express';
const user = new User();

async function createUser(req: Request, res: Response, next: NextFunction) {
  const { firstName, lastName, age, gender, login } = req.body;

  try {
    await validate({ firstName, lastName, age, gender, login }, schema);
    const result = await user.createUser({
      firstName,
      lastName,
      age,
      gender,
      login
    });
    return res.json({
      created: true,
      message: 'user was successfully created'
    });
  } catch (err) {
    return next(err);
  }
};

export default createUser;