import express from 'express';
import authRoute from './authRoute';
import clubRoute from './clubRoute';
import blogRoute from './blogRoute';
//could have added books

const router = express.Router();

router.use('/auth', authRoute);
router.use('/club', clubRoute);
router.use('/blog', blogRoute);

export default router;
