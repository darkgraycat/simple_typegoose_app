import express, { Application } from 'express';

import { router as fileRouter } from './file/file.routes';
import { upload } from './file/file.middleware';

export const app: Application = express();

app.use(express.json());

app.post('/upload', upload.single('file'), (req, res) => {
  const filedata = req.file;
  console.log(filedata);
  if (!filedata)
    res.send('Error loading file');
  else
    res.send('File loaded');
});

app.use('/files', fileRouter);

app.all('*', (req, res) => {
  res.sendStatus(400);
});
