import 'dotenv/config';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.DB_NAME || 'mentesa',
  process.env.DB_USERNAME || 'prostgres',
  process.env.DB_PASSWORD || '12345',
  {
    host: 'localhost',
    dialect: 'postgres',
    port: 15432,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Banco conectado');
  } catch (error) {
    console.error('Problema ao se conectar ao banco de dados:', error);
  }
})();
