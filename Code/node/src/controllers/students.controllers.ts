import { Request, Response } from 'express';
import {
    Student,
    getStudents,
    deleteStudent,
    createStudent,
    enrollStudent,
    withdrawStudent
} from '../models/students.models';
import { getSchoolsForUser } from '../models/schools.models';
import { RequestWithUser } from '../middlewares/authentication/jwt';

export const getStudentsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const students: Student[] = await getStudents();
        res.status(200).json({ students });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const createStudentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const student: Student = req.body;
        await createStudent(student);
        res.status(201).json({ message: 'Student created' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteStudentController = async (req: Request, res: Response): Promise<void> => {
    try {
        await deleteStudent(parseInt(req.params.id));
        res.status(200).json({ message: 'Student deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const enrollStudentController = async (req: RequestWithUser, res: Response): Promise<void> => {
    try {
        const studentId = parseInt(req.params.id);
        const schoolId = parseInt(req.params.schoolId);

        const userId = parseInt(req.userId || '0');
        const schools = await getSchoolsForUser(userId);

        const school = schools.find(s => s.id === schoolId);
        if (!school) {
            res.status(403).json({ message: 'Forbidden' });
            return;
        }

        await enrollStudent(studentId, schoolId);
        res.status(200).json({ message: 'Student enrolled' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const withdrawStudentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId = parseInt(req.params.id);
        await withdrawStudent(studentId);
        res.status(200).json({ message: 'Student withdrawn' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};