import { Router } from 'express';
import { index } from '../controllers/indexController';
import publishersRoutes from './publishers'

const router = Router();

router.get('/', index);
router.use('/publishers', publishersRoutes);

export default router;
