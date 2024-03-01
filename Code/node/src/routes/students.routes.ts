import { Router } from 'express';
import {
    getStudentsController,
    getStudentController,
    createStudentController,
    deleteStudentController,
} from '../controllers/students.controllers';
import {
    validateStudent
} from '../utils/validators/students.validators';

const router = Router();

router.get('/', getStudentsController);
router.get('/:id', getStudentController);
router.post('/', validateStudent, createStudentController);
router.delete('/:id', deleteStudentController);

export default router