import { Router } from 'express';
import { 
    getBooks, 
    getBooksById, 
    createBooks, 
    deleteBooks, 
    updateBooks
    } 
from '../controllers/booksController';

const router = Router();
//Get that return all the Books list
router.get('/', getBooks);
//Get that return specific Books by id
router.get('/:id', getBooksById);
//Create Books
router.post('/', createBooks);
//Delete Books by id
router.delete('/:id', deleteBooks);
//Update Books by id
router.put('/:id', updateBooks);

export default router;