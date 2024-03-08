import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { secretKey } from '../../config/jwt';

export interface RequestWithUser extends Request {
    userId?: string;
}

export interface JwtPayload {
    userId: string;
}

export const verifyJWT = (req: RequestWithUser, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }

        console.log(decoded);

        req.userId = (decoded as JwtPayload).userId;

        console.log(req.userId);
        next();
    });
};
