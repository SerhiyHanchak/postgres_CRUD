import User from "../models/user";
import { NextFunction, Request, Response } from 'express';
const user = new User();

async function findById(req: Request, res: Response, next: NextFunction) {
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

export default findById;
