import { Request, Response } from 'express';
import {
    Student,
    getStudents,
    getStudent,
    deleteStudent,
    createStudent,
} from '../models/students.models';

export const getStudentsController = async (req: Request, res: Response): Promise<void> => {
    const students: Student[] = await getStudents();
    res.status(200).json({ students });
};

export const getStudentController = async (req: Request, res: Response): Promise<void> => {
    const student: Student = await getStudent(parseInt(req.params.id));
    res.status(200).json({ student });
}

export const createStudentController = async (req: Request, res: Response): Promise<void> => {
    const student: Student = req.body;
    await createStudent(student);
    res.status(201).json({ message: 'Student created' });
};

export const deleteStudentController = async (req: Request, res: Response): Promise<void> => {
    await deleteStudent(parseInt(req.params.id));
    res.status(200).json({ message: 'Student deleted' });
};