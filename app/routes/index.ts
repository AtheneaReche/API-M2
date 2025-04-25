import { Router } from 'express';
import { index } from '../controllers/indexController';
import publishersRoutes from './publishers';
import authorsRoutes from './authors';
import booksRoutes from './books';
import authRoutes from './auth';

const router = Router();

router.get('/', index);
router.use('/publishers', publishersRoutes);
router.use('/authors', authorsRoutes);
router.use('/books', booksRoutes);
router.use('/auth', authRoutes);

export default router;
