import { Router } from 'express';
import studentsRouter from './students.routes';
import usersRouter from './users.routes';
import schoolsRouter from './schools.routes';

const router = Router();

router.use('/students', studentsRouter);
router.use('/users', usersRouter);
router.use('/schools', schoolsRouter);

export default router;