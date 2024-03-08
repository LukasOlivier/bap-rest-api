import { Router } from 'express';
import {
    createStudentController,
    deleteStudentController,
    getStudentsController,
    enrollStudentController,
    withdrawStudentController
} from '../controllers/students.controllers';
import {
    validateStudent
} from '../middlewares/validators/students.validators';
import {
    verifyJWT
} from '../middlewares/authentication/jwt';

const router = Router();

router.get('/', getStudentsController);
router.post('/', validateStudent, createStudentController);
router.delete('/:id', deleteStudentController);
router.post('/:id/enroll/:schoolId', verifyJWT, enrollStudentController);
router.post('/:id/withdraw/:schoolId', verifyJWT, withdrawStudentController);

export default router