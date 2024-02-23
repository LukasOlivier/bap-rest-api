DROP TABLE BAP_Student;
DROP TABLE BAP_CourseClass;
DROP TABLE BAP_Class;
DROP TABLE BAP_Course;

CREATE TABLE BAP_Course (
  id INT PRIMARY KEY IDENTITY(1,1),
  name VARCHAR(255)
);

CREATE TABLE BAP_Class (
  id INT PRIMARY KEY IDENTITY(1,1),
  name VARCHAR(255)
);

CREATE TABLE BAP_CourseClass (
  course_id INT FOREIGN KEY REFERENCES BAP_Course(id),
  class_id INT FOREIGN KEY REFERENCES BAP_Class(id),
  PRIMARY KEY (course_id, class_id)
);

CREATE TABLE BAP_Student (
  id INT PRIMARY KEY IDENTITY(1,1),
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  course_id INT FOREIGN KEY REFERENCES BAP_Course(id)
);


INSERT INTO BAP_Course (name) VALUES
('Mathematics'),
('Physics'),
('History');

INSERT INTO BAP_Class (name) VALUES
('Advanced Calculus'),
('Quantum Mechanics'),
('World War II History'),
('Data Structures and Algorithms'),
('Introduction to Astrophysics');

INSERT INTO BAP_CourseClass (course_id, class_id) VALUES
(1, 1),  -- Mathematics -> Advanced Calculus
(1, 4),  -- Mathematics -> Data Structures and Algorithms
(2, 2),  -- Physics -> Quantum Mechanics
(3, 3),  -- History -> World War II History
(3, 5);  -- History -> Introduction to Astrophysics

INSERT INTO BAP_Student (firstName, lastName, email, course_id) VALUES
('John', 'Doe', 'john.doe@example.com', 1),
('Jane', 'Smith', 'jane.smith@example.com', 2),
('Bob', 'Johnson', 'bob.johnson@example.com', 3),
('Alice', 'Williams', 'alice.williams@example.com', 1),
('Michael', 'Brown', 'michael.brown@example.com', 2),
('Emily', 'Davis', 'emily.davis@example.com', 3),
('David', 'Taylor', 'david.taylor@example.com', 1),
('Olivia', 'Miller', 'olivia.miller@example.com', 2),
('Christopher', 'Anderson', 'christopher.anderson@example.com', 3),
('Sophia', 'Moore', 'sophia.moore@example.com', 1),
('Daniel', 'White', 'daniel.white@example.com', 2),
('Grace', 'Jackson', 'grace.jackson@example.com', 3),
('Ethan', 'Harris', 'ethan.harris@example.com', 1),
('Ava', 'Martin', 'ava.martin@example.com', 2),
('Matthew', 'Thompson', 'matthew.thompson@example.com', 3),
('Chloe', 'Clark', 'chloe.clark@example.com', 1),
('James', 'Hall', 'james.hall@example.com', 2),
('Lily', 'Walker', 'lily.walker@example.com', 3),
('Ryan', 'Robinson', 'ryan.robinson@example.com', 1),
('Hannah', 'Young', 'hannah.young@example.com', 2),
('Andrew', 'Carter', 'andrew.carter@example.com', 3),
('Abigail', 'Evans', 'abigail.evans@example.com', 1),
('Logan', 'Ward', 'logan.ward@example.com', 2),
('Mia', 'Baker', 'mia.baker@example.com', 3);

SELECT s.* FROM BAP_Student s JOIN BAP_Course e ON s.course_id = e.id WHERE e.id = 1