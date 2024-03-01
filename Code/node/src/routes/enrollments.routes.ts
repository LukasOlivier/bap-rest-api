import { Router } from 'express';
import {
    enrollStudentController,
    unenrollStudentController,
} from '../controllers/enrollments.controllers';

const router = Router();

router.post('/', enrollStudentController);
router.delete('/', unenrollStudentController);

export default router