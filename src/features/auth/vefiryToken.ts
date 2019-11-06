import User from '../../models/user';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
const user = new User();

async function verifyToken(req: Request, res: Response, next: NextFunction) {
    const bearedHeader = req.headers['authorization'];

    try {
        if (typeof bearedHeader !== 'undefined') {
            const bearer = bearedHeader.split(' ');
            const bearerToken = bearer[1];
            const user = await jwt.verify(bearerToken, 'supersecret')
            req.user = user
            next()
        } else {
            res.status(403).json({ message: 'You are not authorized' })
        }
    } catch (err) {
        return next(err);
    }
};

export default verifyToken;

