import express from 'express';
import authRoute from './authRoute';
import clubRoute from './clubRoute';

const router = express.Router();

router.use('/auth', authRoute);
router.use('/club', clubRoute);

export default router;
