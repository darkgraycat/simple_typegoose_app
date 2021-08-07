import { RequestHandler } from 'express';
import multer from 'multer';
import UserDBService from '../userdb/userdb.service';

export const upload: RequestHandler = multer({
  storage: multer.diskStorage({
    destination: (req, file, next) => {
      next(null, './images')
    },
    filename: (req, file, next) => {
      next(null, `${Date.now()}_${file.originalname}`);
    },
  }),
}).single('file');

export const isAdmin: RequestHandler = async (req, res, next) => {
  if (await UserDBService.fetchIsAdmin(req.params.userId)) {
    next();
  } else {
    next(new Error('This user hasnt permissions to upload'));
  }
}
