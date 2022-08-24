import { Request, Response } from 'express';
import { professionaisType } from './professionaisType';
import { Profissionais } from './profissionaisModel';

export const createProfessional = async (req: Request, res: Response) => {
  const { nome, crp, contato, abordagem } = req.body as professionaisType;

  try {
    const prefessionalCreated = await Profissionais.create({
      nome,
      crp,
      contato,
      abordagem,
    });

    res.send(prefessionalCreated);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const findAllProfessional = async (_req: Request, res: Response) => {
  try {
    const getAllProfessional = await Profissionais.findAll();

    res.status(200).send(getAllProfessional);
  } catch (error) {
    res.status(500).send({
      message: 'algo deu errado',
      error,
    });
  }
};

export const findProfessional = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const getProfessinal = await Profissionais.findOne({
      where: {
        idprofissional: id,
      },
    });

    getProfessinal === null
      ? res.status(404).end()
      : res.status(200).send(getProfessinal);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteProfessional = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const numOfDeleted = await Profissionais.destroy({
      where: {
        idprofissional: id,
      },
    });

    numOfDeleted === 0 ? res.status(404) : res.status(204);
  } catch (error) {
    res.send(error);
  }
};

export const updateProfessional = async (req: Request, res: Response) => {
  const { id } = req.params;
  const objToUpdate = req.body;

  try {
    const professionalUpdated = await Profissionais.update(objToUpdate, {
      where: {
        idprofissional: id,
      },
      returning: true,
    });

    res.send(professionalUpdated);
  } catch (error) {
    res.send(error);
  }
};
