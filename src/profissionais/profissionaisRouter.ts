import express from 'express';
import {
  createProfessional,
  deleteProfessional,
  findAllProfessional,
  findProfessional,
  updateProfessional,
} from './profissionaisController';

const router = express.Router();

router.post('/register', createProfessional);

router.get('/findall', findAllProfessional);

router.get('/find/:id', findProfessional);

router.delete('/delete/:id', deleteProfessional);

router.put('/update/:id', updateProfessional);

export default router;
