import { Request, Response } from 'express';
import { STATUS_CODE } from '../common/constants';
import logger from '../common/logger';
import FileService from './file.service';

export default class FileController {
  public static async upload(req: Request, res: Response) {
    try {
      // make fetch to another db
      // if admin, then create
      const { name, path, content } = req.body;
      const file = await FileService.create(name, path, content);
      return res.status(STATUS_CODE.CREATED).send('Created');
    } catch (err) {
      logger.error(err.stack);
      return res.status(STATUS_CODE.FORBIDDEN).send(err.message);
    }
  }

  public static async getAll(req: Request, res: Response) {
    return res.status(STATUS_CODE.OK).send(await FileService.getAll());
  }

  public static async get(req: Request, res: Response) {
    return res.status(STATUS_CODE.OK).send(
      await FileService.getByName(req.params.name)
    );
  }

}
