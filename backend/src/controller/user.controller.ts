import { Request, Response, NextFunction } from "express";
import { User } from "../model";
import { BadRequest, CustomAPIError } from "../errors";
import { StatusCodes } from "http-status-codes";
import { sendMail, sendUpdateMail } from "../services/mail";
import passfather from "passfather";

export const signup = async (req: Request, res: Response, next: NextFunction) => {

    try {
      


        const { fullname, email } = req.body;

        if (!fullname || !email) throw new CustomAPIError("Provide all fields", StatusCodes.BAD_REQUEST);

        const user = await User.findOne({ email });

        if (user) throw new CustomAPIError("User already exists", StatusCodes.FORBIDDEN);

        const password = passfather();
        const createdUser = await User.create({ ...req.body, password });
        await sendMail(email, password);
        const token = createdUser.getToken();

        res.status(StatusCodes.CREATED).json({
            message: 'User created successfully',
            token
        })

    } catch (err) {
        next(err);
    }

};
export const login = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        const isMatch = await user?.comparePassword(password);

        if (!user || !isMatch) throw new BadRequest("Invalid username or password");

        const token = user.getToken();

        res.status(StatusCodes.OK).json({
            message: "Login successful",
            user: user.fullname,
            token
        });

    } catch (err) {
        next(err);
    }


};

export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) throw new BadRequest("User does not exist");

        const password = passfather();
        user.password = password;
        await user.save();

        await sendUpdateMail(email, password);

        res.status(StatusCodes.OK).json("User password updated successfully");

    } catch (err) {
        next(err);
    }


};