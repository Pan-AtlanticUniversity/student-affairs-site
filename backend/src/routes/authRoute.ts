import express from 'express';
import { forgotPassword, login, signup } from '../controller/user.controller';

const router = express.Router();

router.route('/login').post(login);

router.route('/register').post(signup);

router.route('/forgot_password').post(forgotPassword);

export default router;