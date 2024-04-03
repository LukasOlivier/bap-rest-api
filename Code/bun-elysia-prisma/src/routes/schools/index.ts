import { Elysia } from "elysia";
import { getSchools, getSchoolStudents } from "./handlers";

const schoolRoutes = new Elysia()
    .get("/", (req) => getSchools(req))
    .get("/:id/students", (req) => getSchoolStudents(req))

export default schoolRoutes;