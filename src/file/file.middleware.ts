import axios from 'axios';
import { RequestHandler } from 'express';
import multer, { Multer, FileFilterCallback } from 'multer';

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
  const isAdmin = (await axios.get(`http://localhost:3000/users/isAdmin/${req.params.userId}`)).data;
  if (isAdmin) {
    next();
  } else {
    next(new Error('This user hasnt permissions to upload'));
  }
}
