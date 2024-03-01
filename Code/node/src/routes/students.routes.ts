import { Router } from 'express';
import {
    getStudentsController,
    getStudentController,
    createStudentController,
    deleteStudentController,
} from '../controllers/students.controllers';

const router = Router();

router.get('/', getStudentsController);
router.get('/:id', getStudentController);
router.post('/', createStudentController);
router.delete('/:id', deleteStudentController);

export default router