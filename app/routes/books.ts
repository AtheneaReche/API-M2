import { Router } from 'express';
import { 
    getBooks, 
    getBooksById, 
    createBooks, 
    deleteBooks, 
    updateBooks
    } 
from '../controllers/booksController';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware';

const router = Router();
//Get that return all the Books list
router.get('/', getBooks);
//Get that return specific Books by id
router.get('/:id', getBooksById);
//Create Books
router.post('/', authenticateToken, authorizeRole('admin'), createBooks);
//Delete Books by id
router.delete('/:id', authenticateToken, authorizeRole('admin'), deleteBooks);
//Update Books by id
router.put('/:id', authenticateToken, authorizeRole('admin'), updateBooks);

export default router;