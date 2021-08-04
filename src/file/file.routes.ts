import { Router } from 'express';

import FileController from './file.controller';


export const router = Router();

router.post('/', FileController.upload);
router.get('/', FileController.getAll);
router.get('/:name', FileController.getAll);
