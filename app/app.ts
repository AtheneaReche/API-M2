import express, { Request, Response } from 'express';
import indexRoutes from './routes/index';

const app = express();
const port = 6000;

app.use(express.json());
app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
