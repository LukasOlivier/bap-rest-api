import query from "../config/dbConnection";

export interface Student {
    id: number;
    name: string;
    age: number;
    email: string;
    phone: string;
    schoolId: number;
}

export const getStudents = async (): Promise<Student[]> => {
    const queryText = 'SELECT * FROM Students WHERE schoolId IS NULL';
    return await query<Student>(queryText, []);
};

export const createStudent = async (student: Student): Promise<void> => {
    const queryText = 'INSERT INTO Students (name, age, email, phone) VALUES (?, ?, ?, ?)';
    await query(queryText, [student.name, student.age, student.email, student.phone]);
};

export const deleteStudent = async (id: number): Promise<void> => {
    const queryText = 'DELETE FROM Students WHERE id = ?';
    await query(queryText, [id]);
};

export const enrollStudent = async (studentId: number, schoolId: number): Promise<void> => {
    const queryText = 'UPDATE Students SET schoolId = ? WHERE id = ?';
    await query(queryText, [schoolId, studentId]);
};

export const withdrawStudent = async (studentId: number): Promise<void> => {
    const queryText = 'UPDATE Students SET schoolId = NULL WHERE id = ?';
    await query(queryText, [studentId]);
}