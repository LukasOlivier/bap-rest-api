import { Router } from 'express';
import {
    getStudentsController,
    getStudentController,
    createStudentController,
    deleteStudentController,
} from '../controllers/students.controllers';
import {
    validateStudent
} from '../middlewares/validators/students.validators';
import {
    verifyJWT
} from '../middlewares/authentication/jwt';

const router = Router();

router.get('/', getStudentsController);
router.get('/:id', getStudentController);
router.post('/', verifyJWT, validateStudent, createStudentController);
router.delete('/:id', verifyJWT, deleteStudentController);

export default router