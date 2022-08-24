import express, { Express } from 'express';
import './db/index';
import profissionaisRouter from './profissionais/profissionaisRouter';

const app: Express = express();
app.use(express.json());
app.use('/professional', profissionaisRouter);

app.listen(3333, () => {
  console.log('server works!!!');
});
