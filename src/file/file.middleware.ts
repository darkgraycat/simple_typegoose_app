import { Request, Response } from 'express';
import multer, { Multer } from 'multer';
import path from 'path';

import logger from '../common/logger';

export const uploadFile = (req: Request, res: Response) => { };

export const uploadImage = (req: Request, res: Response) => { };

const storage = multer.diskStorage({
  destination: (req, file, next) => {
    logger.log('DEST');
    next(null, './images')
  },
  filename: (req, file, next) => {
    logger.log('NAME');
    next(null, Date.now() + path.extname(file.originalname))
  },

});

export const upload = multer({ storage });

// const upload: Multer = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, next) => {

//     }
//   });
// });
