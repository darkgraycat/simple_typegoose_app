import { Router } from 'express';

import FileController from './file.controller';
import { errorHandler } from './file.error_handler';
import { upload, isAdmin } from './file.middleware';

export const router = Router();

router.post('/:userId', isAdmin, upload, FileController.upload);
router.get('/', FileController.getAll);
router.get('/:name', FileController.getAll);

router.use(errorHandler);
