import { Request, Response } from 'express';
import {
    User,
    getUsers,
    createUser,
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

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: User = req.body;
        await createUser(user);
        res.status(201).json({ message: 'User created' });
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

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
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const registerController = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: User = req.body;

        const users: User[] = await getUsers();
        const existingUser = users.find(u => u.email === user.email);
        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }

        await createUser(user);
        res.status(201).json({ message: 'User created' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};