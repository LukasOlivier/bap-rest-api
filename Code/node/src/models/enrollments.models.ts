import query from "../config/dbConnection";

export const enrollStudent = async (studentId: number, courseId: number): Promise<void> => {
    const queryText = 'UPDATE Students SET courseId = ? WHERE id = ?';
    await query(queryText, [courseId, studentId]);
};

export const unenrollStudent = async (studentId: number): Promise<void> => {
    const queryText = 'UPDATE Students SET courseId = NULL WHERE id = ?';
    await query(queryText, [studentId]);
};