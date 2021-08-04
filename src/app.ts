import express, { Application } from 'express';

import { router as fileRouter } from './file/file.routes';

export const app: Application = express();

app.use(express.json());
app.use('/files', fileRouter);

app.all('*', (req, res) => {
  res.sendStatus(400);
});
