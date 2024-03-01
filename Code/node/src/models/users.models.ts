import query from "../config/dbConnection";
import jwt from "jsonwebtoken";
import { secretKey } from "../config/jwt";

export interface User {
    id: number;
    email: string;
    password: string;
}

export const getUser = async (email: string): Promise<User> => {
    const queryText = 'SELECT * FROM Users WHERE email = ?';
    return (await query<User>(queryText, [email]))[0];
}

export const getUsers = async (): Promise<User[]> => {
    const queryText = 'SELECT * FROM Users';
    return await query<User>(queryText, []);
}

export const createUser = async (user: User): Promise<void> => {
    const queryText = 'INSERT INTO Users (email, password) VALUES (?, ?)';
    await query(queryText, [user.email, user.password]);
}

export const deleteUser = async (id: number): Promise<void> => {
    const queryText = 'DELETE FROM Users WHERE id = ?';
    await query(queryText, [id]);
}

export const authenticateUser = async (email: string, password: string): Promise<User | null> => {
    const user = await getUser(email);
    if (isPasswordValid(user.password, password)) {
        return user;
    }
    return null;
}

export const generateToken = (user: User): string => {
    const payload = {
        userId: user.id,
    };
    return jwt.sign(payload, secretKey, { expiresIn: '1m' });
}

export const isPasswordValid = (password: string, inputPassword: string): boolean => {
    return password === inputPassword;
}
