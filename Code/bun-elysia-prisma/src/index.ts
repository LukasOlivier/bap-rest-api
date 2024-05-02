import { Elysia } from "elysia";
import { bearer } from '@elysiajs/bearer'

import studentRoutes from "./routes/students";
import userRoutes from "./routes/users";
import schoolRoutes from "./routes/schools";
import jwt from 'jsonwebtoken';

const app = new Elysia()
app
  .use(bearer())
  .get("/getuseridfromtoken", (req) => {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded.userId
  })
  .group('/students', (app) => app.use(studentRoutes))
  .group('/users', (app) => app.use(userRoutes))
  .group('/schools', (app) => app.use(schoolRoutes))
  .listen(3000, () => console.log("Server started at http://localhost:3000"));
