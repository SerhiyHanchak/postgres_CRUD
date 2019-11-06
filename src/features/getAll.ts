import User from "../models/user";
import { NextFunction, Request, Response } from 'express';
const user = new User();

async function getAll(req: Request, res: Response, next: NextFunction) {
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

export default getAll;
