import { Router } from 'express';
import { 
    getPublishers, 
    getPublishersById, 
    createPublishers, 
    deletePublishers, 
    updatePublishers 
    } 
from '../controllers/publishersController';
import { authenticateToken, authorizeRole } from '../middlewares/authMiddleware';

const router = Router();
//Get that return all the Publishers list
router.get('/', getPublishers);
//Get that return specific Publisher by id
router.get('/:id', getPublishersById);
//Create Publishers
router.post('/', authenticateToken, authorizeRole('admin'), createPublishers);
//Delete Publishers by id
router.delete('/:id', authenticateToken, authorizeRole('admin'), deletePublishers);
//Update Publishers by id
router.put('/:id', authenticateToken, authorizeRole('admin'), updatePublishers);

export default router;