import { mongoose } from '@typegoose/typegoose';
import { app } from './app';
import { MONGODB_URL, PORT } from './common/constants';
import logger from './common/logger';

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
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
