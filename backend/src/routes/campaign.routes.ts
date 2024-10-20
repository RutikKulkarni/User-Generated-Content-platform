import { Router } from 'express';
import { createCampaign, getCampaigns } from '../controllers/campaign.controller';
import { authMiddleware } from '../middlewares/auth.middlewares';

const router = Router();

router.post('/', authMiddleware, createCampaign);
router.get('/', getCampaigns);

export default router;
