import { Elysia } from "elysia";
import { login } from "./handlers";

const userRoutes = new Elysia()
    .post("/login", (req) => login(req))
export default userRoutes;