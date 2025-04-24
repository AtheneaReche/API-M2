import { Router } from 'express';
import { getAuthors, getAuthorsById, createAuthors, deleteAuthors, updateAuthors } from '../controllers/authorsController';

const router = Router();
//Get that return all the Authors list
router.get('/', getAuthors);
//Get that return specific Authors by id
router.get('/:id', getAuthorsById);
//Create Authors
router.post('/', createAuthors);
//Delete Authors by id
router.delete('/:id', deleteAuthors);
//Update Authors by id
router.put('/:id', updateAuthors);

export default router;