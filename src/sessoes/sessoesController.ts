import { Request, Response } from 'express';
import { Paciente } from '../pacientes/pacienteModel';

export const getAllSessoes = async (req: Request, res: Response) => {
  const pacienteModel = await Paciente.findAll({
    include: 'paciente_sessao',
  });
  res.send(pacienteModel);
};
