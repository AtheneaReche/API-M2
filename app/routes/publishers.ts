import { Router } from 'express';
import { getPublishers, createPublishers } from '../controllers/publishersCrler';

const router = Router();

router.get('/', getPublishers);
router.post('/', createPublishers);

export default router;