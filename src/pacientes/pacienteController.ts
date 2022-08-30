import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { PacienteModel } from './pacienteModel';
import { pacienteType } from './pacienteType';

export const registerPaciente = async (req: Request, res: Response) => {
  const { nome, cpf, genero, data_nascimento, email } =
    req.body as pacienteType;

  try {
    const registeredPaciente = await PacienteModel.create({
      nome,
      cpf,
      genero,
      data_nascimento,
      email,
    });

    res.status(201).send(registeredPaciente);
  } catch (error) {
    res.send(error);
  }
};

export const findAllPacientes = async (_req: Request, res: Response) => {
  try {
    const Pacientes = await PacienteModel.findAll();
    res.send(Pacientes);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const findPaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const paciente = await PacienteModel.findByPk(id);
    paciente === null ? res.status(404).end() : res.send(paciente);
  } catch (error) {
    res.send(error);
  }
};

export const findPacienteByName = async (req: Request, res: Response) => {
  const { name } = req.query;

  try {
    const pacientes = await PacienteModel.findAll({
      where: {
        nome: {
          [Op.like]: '%' + name + '%',
        },
      },
    });

    res.send(pacientes);
  } catch (error) {
    error;
    res.end();
  }
};

export const deletePaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const pacienteDeleted = await PacienteModel.destroy({
      where: {
        id_paciente: id,
      },
    });

    pacienteDeleted === 0 ? res.status(404).end() : res.status(204).end();
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updatePaciente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const objToUpdate = req.body;

  try {
    const objUpdated = await PacienteModel.update(objToUpdate, {
      where: {
        id_paciente: id,
      },
      returning: true,
    });

    res.send(objUpdated);
  } catch (error) {
    res.send(error);
  }
};
