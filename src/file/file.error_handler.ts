import { ErrorRequestHandler } from 'express';
import { STATUS_CODE } from '../common/constants';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.message);
  res.sendStatus(STATUS_CODE.FORBIDDEN);
};
