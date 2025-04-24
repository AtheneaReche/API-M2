import express, { Request, Response } from 'express';
import connectDB from "../database/db";
import indexRoutes from './routes/index';

const app = express();
const port = 6000;

app.use(express.json());
app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
