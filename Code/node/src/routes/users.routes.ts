import { Router } from 'express';
import {
    deleteUserController,
    getUsersController,
    loginController,
} from '../controllers/users.controllers';

const router = Router();

router.get('/', getUsersController);
router.delete('/:id', deleteUserController);
router.post('/login', loginController);

export default router;