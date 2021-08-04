import { mongoose } from '@typegoose/typegoose';
import { app } from './app';
import logger from './common/logger';
import FileController from './file/file.controller';
import { File, FileModel } from './file/file.model';
import FileService from './file/file.service';

const PORT = 2000;

const DB_USER = 'root';
const DB_PASSWORD = 'root1234';

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@sstypegoosecluster.foisl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (e) => {
  logger.error('Error!');

});
db.once('open', () => {
  logger.log('Connected!');
});

app.listen(PORT, () => {
  logger.info(`Server started at with port: ${PORT}`);
});

(async () => {
  // let k = await FileModel.create({
  //   name: 'someFileName',
  //   path: './someFilePath',
  //   content: 'someContent',
  //   createdAt: new Date()
  // } as File);

  // let f1 = await FileService.create('file1', './path1', '');
  // let f2 = await FileService.create('file2', './path2', '');
  // let f3 = await FileService.create('file3', './path3', '');
  // let f4 = await FileService.create('file4', './path4', '');
  // let res = await FileService.get('someFileName');
  // logger.log(res);

})();

