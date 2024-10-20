import { Router } from 'express';
import { applyToCampaign, getApplications } from '../controllers/application.controller';
import { authMiddleware } from '../middlewares/auth.middlewares';

const router = Router();

router.post('/', authMiddleware, applyToCampaign);
router.get('/', authMiddleware, getApplications);

export default router;
