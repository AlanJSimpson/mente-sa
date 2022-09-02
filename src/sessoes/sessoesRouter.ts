import express from 'express';
import { getAllSessoes } from './sessoesController';

const router = express.Router();

router.get('/findall', getAllSessoes);

export default router;
