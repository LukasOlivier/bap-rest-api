import { Request, Response } from 'express';
import {
    User,
    getUsers,
    createUser,
    deleteUser
} from '../models/users.models';

export const getUsersController = (req: Request, res: Response): void => {
    const users: User[] = getUsers();
    res.status(200).json({ users });
};

export const createUserController = (req: Request, res: Response): void => {
    const user: User = req.body;
    createUser(user);
    res.status(201).json({
        message: 'User created',
        user,
    });
};

export const deleteUserController = (req: Request, res: Response): void => {
    const id: number = parseInt(req.params.id, 10);
    deleteUser(id);
    res.status(200).json({
        message: `User ${id} deleted`,
    });
};