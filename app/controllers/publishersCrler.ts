import { Request, Response } from 'express';


export const getPublishers = (req: Request, res: Response): void => {
  res.send('¡Hola desde TypeScript con Express!');
};

export const createPublishers = (req: Request, res: Response): void => {
    res.send('¡Hola desde TypeScript con Express!');
};