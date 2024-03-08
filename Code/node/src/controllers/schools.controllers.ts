import { Request, Response } from 'express';
import {
    getSchoolStudents,
    getSchoolsForUser,
} from '../models/schools.models';
import { RequestWithUser } from '../middlewares/authentication/jwt';

export const getSchoolsController = async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        const userId = parseInt(req.userId || '0');
        const schools = await getSchoolsForUser(userId);
        res.status(200).json({ schools });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getSchoolStudentsController = async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        const userId = parseInt(req.userId || '0');
        const schoolId = parseInt(req.params.id || '0');
        const schools = await getSchoolsForUser(userId);
        const school = schools.find(s => s.id === schoolId);
        if (!school) {
            res.status(403).json({ message: 'Forbidden' });
            return;
        }
        const students = await getSchoolStudents(schoolId);
        res.status(200).json({ students });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}