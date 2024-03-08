DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Courses;
DROP TABLE IF EXISTS Schools;
DROP TABLE IF EXISTS Students;

CREATE TABLE Users (
    id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255) NOT NULL,
)

CREATE TABLE Schools (
    id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
    name VARCHAR(255) NOT NULL,
    ownerId INT,
    FOREIGN KEY  (ownerId) REFERENCES Users(id)
)

CREATE TABLE Courses (
    id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    credits INT,
    schoolId INT NOT NULL,
    FOREIGN KEY  (schoolId) REFERENCES Schools(id)
)

CREATE TABLE Students (
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  name VARCHAR(255) NOT NULL,
  age INT,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(255),
  courseId INT,
  FOREIGN KEY  (courseId) REFERENCES Courses(id)
);

INSERT INTO Users (email, password)
VALUES ('user1@example.com', 'password'),
       ('user2@example.com', 'password');

INSERT INTO Schools (name, ownerId)
VALUES ('Harvard University', 2),
       ('MIT', 1);

INSERT INTO Courses (name, description, credits, schoolId)
VALUES ('Math 101', 'Introduction to Algebra', 3, 1),
       ('English 101', 'Introduction to English', 3, 1),
       ('History 101', 'Introduction to World History', 3, 1),
       ('Sql 101', 'Introduction to SQL', 3, 2),
       ('Python 101', 'Introduction to Python', 3, 2),
       ('Java 101', 'Introduction to Java', 3, 2);


INSERT INTO Students (name, age, email, phone, courseId)
VALUES ('Alice Smith', 20, 'alice.smith@example.com', '+1234567890', 1),
       ('Bob Jones', 22, 'bob.jones@example.com', '+1987654321', 2),
       ('Charlie Brown', 21, 'charlie.brown@example.com', '+1123456789', 4),
       ('Daisy Johnson', 23, 'daisy.johnson@example.com', '+1157856799', 6);

SELECT * FROM Schools 
JOIN Users ON Schools.ownerId = Users.id
WHERE ownerId = 2

-- Students per school
SELECT *
FROM Schools
JOIN Courses ON Schools.id = Courses.schoolId
JOIN Students ON Courses.id = Students.courseId

SELECT * FROM Students WHERE courseId IN (SELECT id FROM Courses WHERE schoolId = 2)