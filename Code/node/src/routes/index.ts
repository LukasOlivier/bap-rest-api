import { Router } from 'express';
import coursesRouter from './courses.routes';
import studentsRouter from './students.routes';
import usersRouter from './users.routes';
import enrollmentsRouter from './enrollments.routes';


// Create a new Router instance
const router = Router();

// Mount the routers
router.use('/courses', coursesRouter);
router.use('/enroll', enrollmentsRouter);
router.use('/students', studentsRouter);
router.use('/users', usersRouter);

export default router;