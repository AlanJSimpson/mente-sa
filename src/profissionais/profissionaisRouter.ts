import express from 'express';
import { createProfessional } from './profissionaisController';

const router = express.Router();

router.post('/register', createProfessional);

export default router;
