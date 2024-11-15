import { Request, Response, NextFunction } from "express";
import { User } from "../model";
import { BadRequest, CustomAPIError } from "../errors";
import { StatusCodes } from "http-status-codes";
import { sendMail, sendUpdateMail } from "../services/mail";
import passfather from "passfather";
import jwt, { JwtPayload } from "jsonwebtoken";

const validateToken = (token: string, secret: string) => {
  try {
    const decoded = jwt.verify(token, secret) as JwtPayload; // Assert type to JwtPayload
    if (decoded && typeof decoded !== "string") {
      return decoded;
    }
  } catch (error) {
    throw new BadRequest("Error refreshing access token");
  }
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { fullname, email } = req.body;

    if (!fullname || !email)
      throw new CustomAPIError("Provide all fields", StatusCodes.BAD_REQUEST);

    const user = await User.findOne({ email });

    if (user)
      throw new CustomAPIError("User already exists", StatusCodes.FORBIDDEN);

    const password = passfather();
    const createdUser = await User.create({ ...req.body, password });
    await sendMail(email, password);
    const { accessToken, refreshToken } = createdUser.getToken();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
    });
    res.status(StatusCodes.CREATED).json({
      message: "User created successfully",
      accessToken,
    });
  } catch (err) {
    next(err);
  }
};
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    const isMatch = await user?.comparePassword(password);

    if (!user || !isMatch) throw new BadRequest("Invalid username or password");

    const { accessToken, refreshToken } = user.getToken();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7days
    });
    res.status(StatusCodes.OK).json({
      message: "Login successful",
      accessToken,
    });
  } catch (err) {
    next(err);
  }
};

export const refreshSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const refreshToken = req.cookies.refreshToken?.split(" ")[1] || "";
    if (!refreshToken) {
      throw new BadRequest("No session available. Please log in.");
    }

    const verify = validateToken(
      refreshToken,
      process.env.REFRESH_SECRET as string
    );
    if (!verify) {
      throw new BadRequest("Invalid session. Please log in.");
    }

    const payload = { name: verify.name };

    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET as string, {
      expiresIn: "48h",
    });
    res.status(StatusCodes.OK).json({ accessToken: `Bearer ${accessToken}` });
  } catch (err) {
    // Pass errors to the error-handling middleware
    next(err);
  }
};

export const validateAccessToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.body.token || "";
    if (!token) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ valid: false, message: "No token provided" });
    }

    const verify = jwt.verify(token, process.env.ACCESS_SECRET as string);
    if (!verify) {
      return res.status(StatusCodes.BAD_REQUEST).json({ valid: false });
    }

    // Return a response only if token is valid
    return res.status(StatusCodes.OK).json({ valid: true });
  } catch (err) {
    // Pass errors to the error-handling middleware
    next(err);
  }
};

export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) throw new BadRequest("User does not exist");

    const password = passfather();
    user.password = password;
    await user.save();

    await sendUpdateMail(email, password);

    res
      .status(StatusCodes.OK)
      .json({ message: "A new password has been sent to your mail" });
  } catch (err) {
    next(err);
  }
};
