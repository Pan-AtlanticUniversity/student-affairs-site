import "express-async-errors";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UnauthenticatedError, BadRequest } from "../errors";
import { NextFunction, Request, Response } from "express";

interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

const authenticateTokenMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1] || "";

  console.log(token);

  if (!token) throw new BadRequest("No access token provided");

  jwt.verify(token, process.env.ACCESS_SECRET as string, (err, payload) => {
    if (err) throw new UnauthenticatedError(err.message);
    req.user = payload;
    next();
  });
};

export default authenticateTokenMiddleware;
