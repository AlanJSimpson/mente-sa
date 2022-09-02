import cors from 'cors';
import express, { Express } from 'express';
import './db/index';
import pacientesRouter from './pacientes/pacienteRouter';
import profissionaisRouter from './profissionais/profissionaisRouter';
import sessoesRouter from './sessoes/sessoesRouter';

const app: Express = express();
app.use(cors());
app.use(express.json());

app.use('/professional', profissionaisRouter);
app.use('/paciente', pacientesRouter);
app.use('/sessao', sessoesRouter);
app.listen(3333, () => {
  console.log('server works!!!');
});
