DROP TABLE IF EXISTS Students;
DROP TABLE IF EXISTS Schools;
DROP TABLE IF EXISTS Users;

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

CREATE TABLE Students (
  id INT PRIMARY KEY NOT NULL IDENTITY(1,1),
  name VARCHAR(255) NOT NULL,
  age INT,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(255),
  schoolId INT,
  FOREIGN KEY (schoolId) REFERENCES Schools(id)
);

INSERT INTO Users (email, password)
VALUES ('user1@example.com', 'password'),
       ('user2@example.com', 'password');

INSERT INTO Schools (name, ownerId)
VALUES ('Harvard University', 1),
       ('MIT', 2);

INSERT INTO Students (name, age, email, phone, schoolId)
VALUES ('Alice Smith', 20, 'alice.smith@example.com', '+1234567890', 1),
       ('Bob Jones', 22, 'bob.jones@example.com', '+1987654321', 1),
       ('Charlie Brown', 21, 'charlie.brown@example.com', '+1123456789', 2),
       ('Daisy Johnson', 23, 'daisy.johnson@example.com', '+1157856799', 2);