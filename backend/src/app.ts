import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes';
import campaignRoutes from './routes/campaign.routes';
import applicationRoutes from './routes/campaign.routes';
import submissionRoutes from './routes/submission.routes';
import { connectDB } from './config/db';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/submissions', submissionRoutes);

export default app;
