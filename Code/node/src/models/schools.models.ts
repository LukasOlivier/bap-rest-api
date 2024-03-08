import query from "../config/dbConnection";
import { Student } from "./students.models";

export interface School {
    id: number;
    name: string;
    ownerId: number;
}

export const getSchoolsForUser = async (userId: number): Promise<School[]> => {
    const queryText = 'SELECT * FROM Schools WHERE ownerId = ?';
    return await query<School>(queryText, [userId]);
};

export const getSchoolStudents = async (schoolId: number): Promise<Student[]> => {
    const queryText = 'SELECT * FROM Students WHERE schoolId = ?';
    return await query<Student>(queryText, [schoolId]);
}