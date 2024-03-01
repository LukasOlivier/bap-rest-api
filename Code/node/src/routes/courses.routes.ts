import { Router } from 'express';
import {
    getCourseController,
    getCoursesController,
    getCourseStudentsController,
    createCourseController,
    deleteCourseController,
} from '../controllers/courses.controllers';
import { validateCourse } from '../utils/validators/courses.validators';

const router = Router();

router.get('/', getCoursesController);
router.get('/:id', getCourseController);
router.post('/', validateCourse, createCourseController);
router.delete('/:id', deleteCourseController);
router.get('/:id/students', getCourseStudentsController);

export default router