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
       ('Daisy Johnson', 23, 'daisy.johnson@example.com', '+1157856799', 2),
       ('Emma Davis', 19, 'emma.davis@example.com', '+1123456789', NULL),
('Michael Wilson', 20, 'michael.wilson@example.com', '+1987654321', NULL),
('Olivia Taylor', 21, 'olivia.taylor@example.com', '+1234567890', NULL),
('James Martinez', 22, 'james.martinez@example.com', '+1157856799', NULL),
('William Anderson', 18, 'william.anderson@example.com', '+1123456789', NULL),
('Sophia Thomas', 20, 'sophia.thomas@example.com', '+1987654321', NULL),
('Alexander Hernandez', 19, 'alexander.hernandez@example.com', '+1234567890', NULL),
('Ava Moore', 22, 'ava.moore@example.com', '+1157856799', NULL),
('Benjamin Walker', 21, 'benjamin.walker@example.com', '+1123456789', NULL),
('Mia Nelson', 20, 'mia.nelson@example.com', '+1987654321', NULL),
('Ethan Carter', 23, 'ethan.carter@example.com', '+1234567890', NULL),
('Charlotte Hill', 19, 'charlotte.hill@example.com', '+1157856799', NULL),
('Alexander Perez', 20, 'alexander.perez@example.com', '+1123456789', NULL),
('Madison Ramirez', 21, 'madison.ramirez@example.com', '+1987654321', NULL),
('Amelia Flores', 22, 'amelia.flores@example.com', '+1234567890', NULL),
('Daniel Russell', 18, 'daniel.russell@example.com', '+1157856799', NULL),
('Sophia Evans', 20, 'sophia.evans@example.com', '+1123456789', NULL),
('Michael Garcia', 21, 'michael.garcia@example.com', '+1987654321', NULL),
('Olivia Butler', 19, 'olivia.butler@example.com', '+1234567890', NULL),
('Logan Price', 23, 'logan.price@example.com', '+1157856799', NULL),
('Isabella Long', 22, 'isabella.long@example.com', '+1123456789', NULL),
('Lucas Ward', 20, 'lucas.ward@example.com', '+1987654321', NULL),
('Ava Brooks', 21, 'ava.brooks@example.com', '+1234567890', NULL),
('Ethan Foster', 19, 'ethan.foster@example.com', '+1157856799', NULL),
('Mia Gonzalez', 20, 'mia.gonzalez@example.com', '+1123456789', NULL),
('Harper Hughes', 22, 'harper.hughes@example.com', '+1987654321', NULL),
('William Gray', 18, 'william.gray@example.com', '+1234567890', NULL),
('Madison Coleman', 21, 'madison.coleman@example.com', '+1157856799', NULL),
('Elijah Bell', 23, 'elijah.bell@example.com', '+1123456789', NULL),
('Avery Wood', 20, 'avery.wood@example.com', '+1987654321', NULL),
('Emma Hamilton', 19, 'emma.hamilton@example.com', '+1234567890', NULL),
('Jackson Jenkins', 21, 'jackson.jenkins@example.com', '+1157856799', NULL),
('Olivia Perry', 22, 'olivia.perry@example.com', '+1123456789', NULL),
('Sophia Brooks', 18, 'sophia.brooks@example.com', '+1987654321', NULL),
('Mason Collins', 20, 'mason.collins@example.com', '+1234567890', NULL),
('Ella Washington', 21, 'ella.washington@example.com', '+1157856799', NULL),
('Aiden Diaz', 23, 'aiden.diaz@example.com', '+1123456789', NULL),
('Scarlett Bryant', 19, 'scarlett.bryant@example.com', '+1987654321', NULL),
('Aria Reed', 20, 'aria.reed@example.com', '+1234567890', NULL),
('Liam Hughes', 22, 'liam.hughes@example.com', '+1157856799', NULL),
('Aria Kelly', 18, 'aria.kelly@example.com', '+1123456789', NULL),
('Emily Henderson', 20, 'emily.henderson@example.com', '+1987654321', NULL),
('Oliver Washington', 21, 'oliver.washington@example.com', '+1234567890', NULL),
('Charlotte Reed', 19, 'charlotte.reed@example.com', '+1157856799', NULL),
('Lucas Edwards', 23, 'lucas.edwards@example.com', '+1123456789', NULL),
('Amelia Ross', 20, 'amelia.ross@example.com', '+1987654321', NULL),
('Mia Bennett', 21, 'mia.bennett@example.com', '+1234567890', NULL),
('Noah Griffin', 18, 'noah.griffin@example.com', '+1157856799', NULL),
('Avery Hughes', 20, 'avery.hughes@example.com', '+1123456789', NULL),
('Ava Nelson', 22, 'ava.nelson@example.com', '+1987654321', NULL),
('Ethan Perry', 19, 'ethan.perry@example.com', '+1234567890', NULL),
('Isabella Wood', 21, 'isabella.wood@example.com', '+1157856799', NULL),
('Olivia Coleman', 23, 'olivia.coleman@example.com', '+1123456789', NULL),
('Sophia Watson', 20, 'sophia.watson@example.com', '+1987654321', NULL),
('Liam Bryant', 19, 'liam.bryant@example.com', '+1234567890', NULL),
('Ella Butler', 21, 'ella.butler@example.com', '+1157856799', NULL),
('James Jenkins', 22, 'james.jenkins@example.com', '+1123456789', NULL),
('Emma Rogers', 18, 'emma.rogers@example.com', '+1987654321', NULL),
('Mason Washington', 20, 'mason.washington@example.com', '+1234567890', NULL),
('Amelia Watson', 21, 'amelia.watson@example.com', '+1157856799', NULL),
('Oliver Brooks', 23, 'oliver.brooks@example.com', '+1123456789', NULL),
('Charlotte Diaz', 19, 'charlotte.diaz@example.com', '+1987654321', NULL);
       

SELECT * FROM Users;
SELECT * FROM Schools;
SELECT * FROM Students;