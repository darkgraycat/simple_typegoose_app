import { mongoose } from '@typegoose/typegoose';
import { app } from './app';
import logger from './common/logger';
import { KittenModel } from './kitten/kitten.model';

const PORT = 2000;

const DB_USER = 'root';
const DB_PASSWORD = 'root1234';

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@sstypegoosecluster.foisl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (e) => { console.error(e.message) });
db.once('open', () => {
  console.log('Connected!');
});

app.listen(PORT, () => {
  logger.info(`Server started at with port: ${PORT}`);
});

(async () => {
  let document = await KittenModel.create({ name: 'Morris', species: 'GrayCat' });
})();

