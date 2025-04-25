import { Router } from 'express';
import { authenticateToken } from '../middlewares/authMiddleware';
import { getFavorites } from '../controllers/favoritesController';

const router = Router();

router.get('/', authenticateToken, getFavorites);

export default router;
