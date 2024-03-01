import { Router } from 'express';
import {
    createUserController,
    deleteUserController,
    getUsersController,
    loginController,
    registerController
} from '../controllers/users.controllers';
import {
    validateUser
} from '../middlewares/validators/users.validators';

const router = Router();

router.get('/', getUsersController);
router.post('/', validateUser, createUserController);
router.delete('/:id', deleteUserController);
router.post('/login', loginController);
router.post('/register', validateUser, registerController);

export default router;