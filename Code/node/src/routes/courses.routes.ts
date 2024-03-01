import { Router } from 'express';
import {
    getCourseController,
    getCoursesController,
    getCourseStudentsController,
    createCourseController,
    deleteCourseController,
} from '../controllers/courses.controllers';

const router = Router();

router.get('/', getCoursesController);
router.get('/:id', getCourseController);
router.post('/', createCourseController);
router.delete('/:id', deleteCourseController);
router.get('/:id/students', getCourseStudentsController);


export default router