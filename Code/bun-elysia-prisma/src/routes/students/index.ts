import { Elysia } from "elysia";
import { getStudents, createStudent, deleteStudent, enrollStudent, withdrawStudent } from "./handlers";

const studentRoutes = new Elysia()
    .get("/", () => getStudents())
    .post("/", (req) => createStudent(req))
    .delete("/:id", (req) => deleteStudent(req))
    .post("/:id/enroll/:schoolId", (req) => enrollStudent(req))
    .post("/:id/withdraw/:schoolId", (req) => withdrawStudent(req))

export default studentRoutes;