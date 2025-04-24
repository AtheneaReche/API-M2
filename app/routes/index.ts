import { Router } from 'express';
import { index } from '../controllers/indexController';
import publishersRoutes from './publishers';
import authorsRoutes from './authors';

const router = Router();

router.get('/', index);
router.use('/publishers', publishersRoutes);
router.use('/authors', authorsRoutes);

export default router;
