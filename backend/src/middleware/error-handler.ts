import { Errback, NextFunction, Request, Response } from 'express';
import { CustomAPIError } from '../errors';
import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err: Errback, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof CustomAPIError) return res.status(err.statusCode).json({ message: err.message });
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send(err)
}

export default errorHandlerMiddleware;