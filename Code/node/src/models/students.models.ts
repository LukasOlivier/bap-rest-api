import query from "../config/dbConnection";

export interface Student {
    id: number;
    name: string;
    age: number;
    email: string;
    phone: string;
    courseId: number;
}

export const getStudents = async (): Promise<Student[]> => {
    const queryText = 'SELECT * FROM Students';
    return await query<Student>(queryText);
};

export const getStudent = async (id: number): Promise<Student> => {
    const queryText = 'SELECT * FROM Students WHERE id = ?';
    return (await query<Student>(queryText, [id]))[0];
};

export const createStudent = async (student: Student): Promise<void> => {
    console.log(student);
    const queryText = 'INSERT INTO Students (name, age, email, phone) VALUES (?, ?, ?, ?)';
    await query(queryText, [student.name, student.age, student.email, student.phone]);
};

export const deleteStudent = async (id: number): Promise<void> => {
    const queryText = 'DELETE FROM Students WHERE id = ?';
    await query(queryText, [id]);
};