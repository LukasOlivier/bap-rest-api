import { Request, Response } from 'express';
import {
    User,
    getUsers,
    deleteUser,
    authenticateUser,
    generateToken,
} from '../models/users.models';

export const getUsersController = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: User[] = await getUsers();
        res.status(200).json({ users });
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        await deleteUser(parseInt(req.params.id));
        res.status(200).json({ message: 'User deleted' });
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const loginController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const user: User | null = await authenticateUser(email, password);
        if (user) {
            const token = generateToken(user);
            const userId = user.id;
            res.status(200).json({ token, userId });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

