import { Request, Response } from 'express';
import {
    getCourse,
    getCourses,
    getCourseStudents,
    createCourse,
    deleteCourse,
} from '../models/courses.models';

export const getCoursesController = async (req: Request, res: Response): Promise<void> => {
    try {
        const courses = await getCourses();
        res.status(200).json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving courses' });
    }
};

export const getCourseController = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseId = parseInt(req.params.id);
        const course = await getCourse(courseId);
        if (!course) {
            res.status(404).json({ message: 'Course not found' });
            return;
        }
        res.status(200).json({ course });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving course' });
    }
};

export const createCourseController = async (req: Request, res: Response): Promise<void> => {
    try {
        const course = req.body;
        await createCourse(course);
        res.status(201).json({ message: 'Course created' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error creating course' });
    }
};

export const deleteCourseController = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseId = parseInt(req.params.id);
        await deleteCourse(courseId);
        res.status(200).json({ message: 'Course deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting course' });
    }
};

export const getCourseStudentsController = async (req: Request, res: Response): Promise<void> => {
    try {
        const courseId = parseInt(req.params.id);
        const students = await getCourseStudents(courseId);
        res.status(200).json({ students });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving course students' });
    }
};
