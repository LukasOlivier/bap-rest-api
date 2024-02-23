import mssql from "mssql/msnodesqlv8.js";
import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// Connect to SQL Server using Windows Auth
const conn = new mssql.ConnectionPool({
  connectionString:
    "Driver={ODBC Driver 18 for SQL Server};Server=INTEGREAT-OEW3C;Database=ProCure2;Trusted_Connection=yes;TrustServerCertificate=yes",
});

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(cors());

// Get all students
app.get("/students", async (req, res) => {
  try {
    const pool = await conn.connect();
    const result = await pool.request().query("SELECT * FROM BAP_Student");
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Add a new student
app.post("/students", async (req, res) => {
  try {
    const pool = await conn.connect();
    const result = await pool
      .request()
      .input("id", mssql.Int, req.body.id)
      .input("FirstName", mssql.NVarChar, req.body.FirstName)
      .input("LastName", mssql.NVarChar, req.body.LastName)
      .input("Email", mssql.NVarChar, req.body.Email)
      .query(
        "INSERT INTO BAP_Student (id, FirstName, LastName, Email) VALUES (@id, @FirstName, @LastName, @Email)"
      );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a student
app.put("/students/:id", async (req, res) => {
  try {
    const pool = await conn.connect();
    const result = await pool
      .request()
      .input("id", mssql.Int, req.params.id)
      .input("FirstName", mssql.NVarChar, req.body.FirstName)
      .input("LastName", mssql.NVarChar, req.body.LastName)
      .input("Email", mssql.NVarChar, req.body.Email)
      .query(
        "UPDATE BAP_Student SET FirstName = @FirstName, LastName = @LastName, Email = @Email WHERE id = @id"
      );
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete a student
app.delete("/students/:id", async (req, res) => {
  try {
    const pool = await conn.connect();
    const result = await pool
      .request()
      .input("id", mssql.Int, req.params.id)
      .query("DELETE FROM BAP_Student WHERE id = @id");
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get a student by ID
app.get("/students/:id", async (req, res) => {
  try {
    const pool = await conn.connect();
    const result = await pool
      .request()
      .input("id", mssql.Int, req.params.id)
      .query("SELECT * FROM BAP_Student WHERE id = @id");
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get all courses for a student
app.get("/students/:id/courses", async (req, res) => {
  try {
    const pool = await conn.connect();
    const result = await pool
      .request()
      .input("id", mssql.Int, req.params.id)
      .query(
        "SELECT c.* FROM BAP_Course c JOIN BAP_Course e ON c.id = e.id WHERE e.id = @id"
      );
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Enroll a student in a course
app.post("/enrollments", async (req, res) => {
  try {
    const pool = await conn.connect();
    const result = await pool
      .request()
      .input("id", mssql.Int, req.body.id)
      .input("id", mssql.Int, req.body.id)
      .query("INSERT INTO BAP_Course (id, id) VALUES (@id, @id)");
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get all courses
app.get("/courses", async (req, res) => {
  try {
    const pool = await conn.connect();
    const result = await pool.request().query("SELECT * FROM BAP_Course");
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get all courses for a student
app.get("/students/:id/courses", async (req, res) => {
  try {
    const pool = await conn.connect();
    const result = await pool
      .request()
      .input("id", mssql.Int, req.params.id)
      .query(
        "SELECT c.* FROM BAP_Course c JOIN BAP_Course e ON c.id = e.id WHERE e.id = @id"
      );
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Remove a student from a course
app.delete("/enrollments/:id/:id", async (req, res) => {
  try {
    const pool = await conn.connect();
    const result = await pool
      .request()
      .input("id", mssql.Int, req.params.id)
      .input("id", mssql.Int, req.params.id)
      .query("DELETE FROM BAP_Course WHERE id = @id AND id = @id");
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get all students for a course
app.get("/courses/:id/students", async (req, res) => {
  try {
    const pool = await conn.connect();
    const result = await pool
      .request()
      .input("id", mssql.Int, req.params.id)
      .query(
        "SELECT s.* FROM BAP_Student s JOIN BAP_Course e ON s.course_id = e.id WHERE e.id = @id"
      );
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
