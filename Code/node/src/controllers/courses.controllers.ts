import { Request, Response } from 'express';
import {
    getCourse,
    getCourses,
    getCourseStudents,
    createCourse,
    deleteCourse,
} from '../models/courses.models';

export const getCoursesController = async (req: Request, res: Response): Promise<void> => {
    const courses = await getCourses();
    res.status(200).json({ courses });
};

export const getCourseController = async (req: Request, res: Response): Promise<void> => {
    const course = await getCourse(parseInt(req.params.id));
    res.status(200).json({ course });
};

export const createCourseController = async (req: Request, res: Response): Promise<void> => {
    const course = req.body;
    await createCourse(course);
    res.status(201).json({ message: 'Course created' });
};

export const deleteCourseController = async (req: Request, res: Response): Promise<void> => {
    await deleteCourse(parseInt(req.params.id));
    res.status(200).json({ message: 'Course deleted' });
};

export const getCourseStudentsController = async (req: Request, res: Response): Promise<void> => {
    const students = await getCourseStudents(parseInt(req.params.id));
    res.status(200).json({ students });
};