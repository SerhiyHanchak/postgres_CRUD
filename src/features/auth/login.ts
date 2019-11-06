import User from '../../models/user';
import { NextFunction, Request, Response } from 'express';
const user = new User();
import * as _ from 'lodash';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

async function login(req: Request, res: Response, next: NextFunction) {
    const { login, password } = req.body;

    try {
        const data = await user.findByUsername(login);
        if (data.length == 0) {
            return res
                .status(400)
                .json({ message: `There is no user with username: ${login}` });
        }
        const match = await bcrypt.compare(password, data[0].password);
        if (match) {
            jwt.sign({ user: data }, 'supersecret', { expiresIn: '24h' }, (err, token) => {
                res.json({ token })
            })
        } else {
            res.status(400).json({ message: 'The password is invalid' })
        }
    } catch (err) {
        return next(err);
    }
};

export default login;
