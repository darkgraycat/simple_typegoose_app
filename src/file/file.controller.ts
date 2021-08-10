import { Request, Response } from 'express';
import { STATUS_CODE } from '../common/constants';
import FileService from './file.service';

export default class FileController {
  public static async upload(req: Request, res: Response) {
    if (!req.file)
      return res.sendStatus(STATUS_CODE.BAD_REQUEST);

    const {
      originalname,
      path,
      mimetype
    } = req.file;
    await FileService.create(originalname, path, mimetype);
    return res.sendStatus(STATUS_CODE.CREATED);
  }

  public static async getAll(req: Request, res: Response) {
    const page: number = res.locals.page;
    if (page < 1) return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    return res.status(STATUS_CODE.OK).send(await FileService.getAll(page));
  }

  public static async get(req: Request, res: Response) {
    return res.status(STATUS_CODE.OK).send(
      await FileService.getByName(req.params.name)
    );
  }
}
