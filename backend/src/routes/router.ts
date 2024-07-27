import express from 'express';
import authRoute from './authRoute';
import clubRoute from './clubRoute';
import bookRoute from './bookRoute';
//could have added books

const router = express.Router();

router.use('/auth', authRoute);
router.use('/club', clubRoute);
router.use('/book', bookRoute);

export default router;
