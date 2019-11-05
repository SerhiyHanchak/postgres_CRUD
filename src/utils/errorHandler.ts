import { NextFunction, Request, Response } from 'express';
import HttpException from './httpException';

function errorHandler(err: HttpException, req: Request, res: Response, next: NextFunction) {
    const status = err.status || 500;
    const responseData = {
        error: err.name,
        message: err.message || err,
        stack: err.stack
    };
    console.error(err.message || err);
    res.status(status).send(responseData)
}

export default errorHandler;
