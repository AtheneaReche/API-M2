import { Router } from 'express';
import { authenticateToken } from '../middlewares/authMiddleware';
import {
  startReading,
  updateProgress,
  getUserBooks
} from '../controllers/readingController';

const router = Router();

router.get('/', authenticateToken, getUserBooks);
router.post('/start', authenticateToken, startReading);
router.put('/update', authenticateToken, updateProgress);

export default router;
