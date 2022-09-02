'use strict';
import { DataTypes } from 'sequelize';
import { sequelize } from '../db/index';
import { Sessao } from '../sessoes/sessoesModel';

const Profissionais = sequelize.define(
  'Profissional',
  {
    id_profissional: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    crp: {
      type: DataTypes.NUMBER,
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

Profissionais.hasMany(Sessao, {
  as: 'sessao',
  foreignKey: 'id_profissional',
});

export { Profissionais };
