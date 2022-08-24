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

    res.status(201).send(prefessionalCreated);
  } catch (error) {
    res.status(400).send({ message: 'Algo deu errado', error });
  }
};
