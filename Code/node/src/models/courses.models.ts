import query from "../config/dbConnection";
import { Student } from "./students.models";

export interface Course {
    id: number;
    name: string;
    description: string;
    credits: number;
}

export const getCourses = async (): Promise<Course[]> => {
    const queryText = 'SELECT * FROM Courses';
    return await query<Course>(queryText);
};

export const getCourse = async (id: number): Promise<Course> => {
    const queryText = 'SELECT * FROM Courses WHERE id = ?';
    return (await query<Course>(queryText, [id]))[0];
};

export const createCourse = async (course: Course): Promise<void> => {
    const queryText = 'INSERT INTO Courses (name, description, credits) VALUES (?, ?, ?)';
    await query(queryText, [course.name, course.description, course.credits]);
};

export const deleteCourse = async (id: number): Promise<void> => {
    const queryText = 'DELETE FROM Courses WHERE id = ?';
    await query(queryText, [id]);
};

export const getCourseStudents = async (id: number): Promise<Student[]> => {
    const queryText = 'SELECT * FROM Students WHERE courseId = ?';
    return await query<Student>(queryText, [id]);
};