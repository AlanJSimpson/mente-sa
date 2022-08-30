import express from 'express';
import {
  deletePaciente,
  findAllPacientes,
  findPaciente,
  findPacienteByName,
  registerPaciente,
  updatePaciente,
} from './pacienteController';

const router = express.Router();

router.get('/', findPacienteByName);
router.get('/findall', findAllPacientes);

router.get('/find/:id', findPaciente);

router.post('/register', registerPaciente);

router.put('/update/:id', updatePaciente);

router.delete('/delete/:id', deletePaciente);

export default router;
