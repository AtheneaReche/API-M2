import { Request, Response } from 'express';

export const index = (req: Request, res: Response): void => {
  res.send('¡Hola desde TypeScript con Express!');
};
