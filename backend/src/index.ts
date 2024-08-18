import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { notFound, errorHandlerMiddleware } from './middleware';
import router from './routes/router';
import connectDB from './db/connection';
import path from 'path';
dotenv.config();

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.send({ message: 'Hello API' });
});

app.use('/api/v1/', router); //get's the route declared above


  
app.use(notFound);

app.use(errorHandlerMiddleware);

(async () => {
    try {
        await connectDB(process.env.MONGO_URI as string);
        console.log('[ ready ] backend connected');
        app.listen(port, host);
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        // Optionally, handle the error here or let the errorHandlerMiddleware catch it
    }
})();

