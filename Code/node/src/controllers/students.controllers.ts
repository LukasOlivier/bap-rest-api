import { Request, Response } from 'express';
import {
    Student,
    getStudents,
    deleteStudent,
    createStudent,
    getStudent
} from '../models/students.models';

export const getStudentsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const students: Student[] = await getStudents();
        res.status(200).json({ students });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getStudentController = async (req: Request, res: Response): Promise<void> => {
    try {
        const student: Student = await getStudent(parseInt(req.params.id));
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }
        res.status(200).json({ student });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

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