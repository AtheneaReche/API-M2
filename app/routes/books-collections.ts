import { Router } from 'express';
import {
  createCollection,
  getCollections,
  deleteCollection,
  addBookToCollection,
  removeBookFromCollection
} from '../controllers/collectionsController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authenticateToken, getCollections);
router.post('/', authenticateToken, createCollection);
router.delete('/:id', authenticateToken, deleteCollection);
router.post('/add-book', authenticateToken, addBookToCollection);
router.post('/remove-book', authenticateToken, removeBookFromCollection);

export default router;
