import { Request, Response } from 'express';
import {
    enrollStudent,
    unenrollStudent,
    checkStudentEnrollment,
} from '../models/enrollments.models';

export const enrollStudentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId = parseInt(req.body.studentId);
        const courseId = parseInt(req.body.courseId);

        const isEnrolled = await checkStudentEnrollment(studentId);

        if (isEnrolled) {
            res.status(400).json({ message: 'Student already enrolled in another course. Unenroll first.' });
            return;
        }

        await enrollStudent(studentId, courseId);
        res.status(200).json({ message: 'Student enrolled' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error enrolling student' });
    }
};

export const unenrollStudentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentId = parseInt(req.body.studentId);
        await unenrollStudent(studentId);
        res.status(200).json({ message: 'Student unenrolled', studentId });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};