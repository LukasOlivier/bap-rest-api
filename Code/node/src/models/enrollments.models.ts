import query from "../config/dbConnection";

export const enrollStudent = async (studentId: number, courseId: number): Promise<void> => {
    const queryText = 'UPDATE Students SET courseId = ? WHERE id = ?';
    await query(queryText, [courseId, studentId]);
};

export const unenrollStudent = async (studentId: number): Promise<void> => {
    const queryText = 'UPDATE Students SET courseId = NULL WHERE id = ?';
    await query(queryText, [studentId]);
};

export const checkStudentEnrollment = async (studentId: number): Promise<boolean> => {
    const queryText = 'SELECT courseId FROM Students WHERE id = ?';
    const result = await query<{ courseId: number }>(queryText, [studentId]);
    if (result.length === 0) {
        return false;
    }
    return result[0].courseId !== null;
};