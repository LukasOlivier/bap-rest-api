import { Router } from 'express';
import {
    getSchoolsController,
    getSchoolStudentsController
} from '../controllers/schools.controllers';
import {
    verifyJWT
} from '../middlewares/authentication/jwt';

const router = Router();

router.get('/', verifyJWT, getSchoolsController);
router.get('/:id/students', verifyJWT, getSchoolStudentsController);

export default router