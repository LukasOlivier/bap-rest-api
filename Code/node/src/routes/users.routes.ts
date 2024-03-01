import { Router } from 'express';
import {
    createUserController,
    deleteUserController,
    getUsersController,
} from '../controllers/users.controllers';
import {
    validateUser
} from '../utils/validators/users.validators';

const router = Router();

router.get('/', getUsersController);
router.post('/', validateUser, createUserController);
router.delete('/:id', deleteUserController);

export default router;