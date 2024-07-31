import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: process.env.USER_MAIL as string,
        pass: process.env.MAIL_PASS as string
    },
    tls: {
        rejectUnauthorized: false
    },
    debug: true
});

export default transporter;