import { Router } from 'express';
import {
    getCourseController,
    getCoursesController,
    getCourseStudentsController,
    createCourseController,
    deleteCourseController,
} from '../controllers/courses.controllers';
import { validateCourse } from '../middlewares/validators/courses.validators';
import {
    verifyJWT
} from '../middlewares/authentication/jwt';

const router = Router();

router.get('/', getCoursesController);
router.get('/:id', getCourseController);
//router.post('/', verifyJWT, validateCourse, createCourseController);
router.post('/', verifyJWT, validateCourse, createCourseController);
router.delete('/:id', verifyJWT, deleteCourseController);
router.get('/:id/students', getCourseStudentsController);

export default router