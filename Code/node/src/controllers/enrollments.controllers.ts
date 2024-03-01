import { Request, Response } from 'express';
import {
    enrollStudent,
    unenrollStudent,
} from '../models/enrollments.models';

export const enrollStudentController = async (req: Request, res: Response): Promise<void> => {
    const studentId = parseInt(req.body.studentId);
    const courseId = parseInt(req.body.courseId);
    await enrollStudent(studentId, courseId);
    res.status(200).json({ message: 'Student enrolled' });
};

export const unenrollStudentController = async (req: Request, res: Response): Promise<void> => {
    const studentId = parseInt(req.body.studentId);
    await unenrollStudent(studentId);
    res.status(200).json({ message: 'Student unenrolled', studentId });
};