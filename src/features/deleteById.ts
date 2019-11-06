import User from '../models/user';
import { NextFunction, Request, Response } from 'express';
const user = new User();

async function deleteUser(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  try {
    const result = await user.deleteUser(id);
    if (result != 0) {
      return res.json({
        removed: true,
        message: `user with id:${id} - was successfully removed`
      });
    } else {
      res.status(400).send({ message: `No user with such id:${id}` })
    }
  } catch (err) {
    return next(err);
  }
};

export default deleteUser;