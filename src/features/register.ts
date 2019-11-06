import User from '../models/user';
import validate from '../utils/validateObject';
import schema from '../schemas/createSchema';
import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
const user = new User();

async function register(req: Request, res: Response, next: NextFunction) {
  const { firstName, lastName, age, gender, login, password } = req.body;
  let loginExist;

  try {
    await validate({ firstName, lastName, age, gender, login, password }, schema);
    loginExist = await user.findByUsername(login);
    if (loginExist.length != 0) return res.status(400).json({ message: 'Login already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const result = await user.createUser({
      firstName: firstName,
      lastName: lastName,
      age: age,
      gender: gender,
      login: login,
      password: hashedPassword
    });
    return res.json({
      created: true,
      message: 'user was successfully created',
      user: result
    });
  } catch (err) {
    return next(err);
  }
};

export default register;