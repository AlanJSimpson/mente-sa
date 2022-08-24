'use strict';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/index';

export const Profissionais = sequelize.define(
  'Profissional',
  {
    idprofissional: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    crp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contato: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    abordagem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: 'profissionais' }
);
