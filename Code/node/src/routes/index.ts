import { Router } from 'express';
import coursesRouter from './courses.routes';
import studentsRouter from './students.routes';
import usersRouter from './users.routes';
import enrollmentsRouter from './enrollments.routes';

const router = Router();

router.use('/courses', coursesRouter);
router.use('/enroll', enrollmentsRouter);
router.use('/students', studentsRouter);
router.use('/users', usersRouter);

export default router;