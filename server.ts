import express, { Request, Response } from 'express';
import cors from 'cors';
import 'reflect-metadata';
import router from './src/routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});