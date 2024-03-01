DROP TABLE IF EXISTS Students;
DROP TABLE IF EXISTS Courses;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255) NOT NULL
)

CREATE TABLE Courses (
    id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    credits INT
)

INSERT INTO Courses (name, description, credits)
VALUES ('Math 101', 'Introduction to Algebra', 3),
       ('English 101', 'Introduction to English', 3),
       ('History 101', 'Introduction to World History', 3);

CREATE TABLE Students (
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  name VARCHAR(255) NOT NULL,
  age INT,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(255),
  courseId INT,
  FOREIGN KEY (courseId) REFERENCES Courses(id)
);

INSERT INTO Students (name, age, email, phone)
VALUES ('Alice Smith', 20, 'alice.smith@example.com', '+1234567890'),
       ('Bob Jones', 22, 'bob.jones@example.com', '+1987654321'),
       ('Charlie Brown', 21, 'charlie.brown@example.com', '+1123456789');
 