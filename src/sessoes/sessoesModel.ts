import { DataTypes, literal } from 'sequelize';
import { sequelize } from '../db/index';

const Sessao = sequelize.define(
  'Sessao',
  {
    id_sessao: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_agendamento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tema_abordado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo_de_agendamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duracao: {
      type: 'TIMESTAMP',
      defaultValue: literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    tipo_sessao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'sessao',
  }
);

export { Sessao };
