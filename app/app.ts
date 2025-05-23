import express, { Request, Response } from 'express';
import connectDB from "../database/db";
import indexRoutes from './routes/index';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

dotenv.config();
const app = express();
const port = 3000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API M2 by Athena Reche',
    },
  },
  apis: ['./build/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', indexRoutes);


app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
