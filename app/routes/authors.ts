import { Router } from 'express';
import { 
    getAuthors, 
    getAuthorsById, 
    createAuthors, 
    deleteAuthors, 
    updateAuthors 
    } 
from '../controllers/authorsController';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware';

const router = Router();
//Get that return all the Authors list
router.get('/', getAuthors);
//Get that return specific Authors by id
router.get('/:id', getAuthorsById);
//Create Authors
router.post('/', authenticateToken, authorizeRole('admin'), createAuthors);
//Delete Authors by id
router.delete('/:id', authenticateToken, authorizeRole('admin'), deleteAuthors);
//Update Authors by id
router.put('/:id', authenticateToken, authorizeRole('admin'), updateAuthors);

export default router;