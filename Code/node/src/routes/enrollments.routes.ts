import { Router } from 'express';
import {
    enrollStudentController,
    unenrollStudentController,
} from '../controllers/enrollments.controllers';
import {
    verifyJWT
} from '../middlewares/authentication/jwt';

const router = Router();

router.post('/', verifyJWT, enrollStudentController);
router.delete('/', verifyJWT, unenrollStudentController);

export default router