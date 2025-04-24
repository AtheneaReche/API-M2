import { Router } from 'express';
import { 
    getPublishers, 
    getPublishersById, 
    createPublishers, 
    deletePublishers, 
    updatePublishers 
    } 
from '../controllers/publishersController';

const router = Router();
//Get that return all the Publishers list
router.get('/', getPublishers);
//Get that return specific Publisher by id
router.get('/:id', getPublishersById);
//Create Publishers
router.post('/', createPublishers);
//Delete Publishers by id
router.delete('/:id', deletePublishers);
//Update Publishers by id
router.put('/:id', updatePublishers);

export default router;