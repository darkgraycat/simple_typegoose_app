import { Router } from 'express';

import FileController from './file.controller';
import { errorHandler } from './file.error_handler';
import { upload, isAdmin, parsePage } from './file.middleware';

export const router = Router();

router.post('/:userId', isAdmin, upload, FileController.upload);
router.get('/', parsePage, FileController.getAll);
router.get('/:name', FileController.get);

router.use(errorHandler);
