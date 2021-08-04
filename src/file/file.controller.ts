import { Request, Response } from 'express';
import { STATUS_CODE } from '../common/constants';
import FileService from './file.service';

export default class FileController {
  public static async upload(req: Request, res: Response) {
    const isAdmin = await FileService.isAdmin(req.body.userId);
    if (isAdmin) {
      const { name, path, content } = req.body;
      const file = await FileService.create(name, path, content);
      return res.status(STATUS_CODE.CREATED).send('Created');
    }
    return res.sendStatus(STATUS_CODE.FORBIDDEN);
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
