import { Router } from 'express';
import { submitContent, getSubmissions } from '../controllers/submission.controller';
import { authMiddleware } from '../middlewares/auth.middlewares';

const router = Router();

router.post('/', authMiddleware, submitContent);
router.get('/', authMiddleware, getSubmissions);

export default router;
