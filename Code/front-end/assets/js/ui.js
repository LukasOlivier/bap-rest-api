// ui.js
import * as api from "./api.js";

// Function to render a student card
function renderStudent(student) {
  const template = document.getElementById("student-template");
  const studentCard = document.importNode(template.content, true);

  studentCard.querySelector(
    ".student-name"
  ).textContent = `${student.firstName} ${student.lastName}`;
  studentCard.querySelector(".student-email").textContent = student.email;

  return studentCard;
}

// Function to render a course card with students
async function renderCourse(course) {
  const template = document.getElementById("course-template");
  const courseCard = document.importNode(template.content, true);

  courseCard.querySelector(".course-name").textContent = course.name;

  const studentsList = courseCard.querySelector(".students-list");

  // Fetch students for the current course
  const students = await api.get(`courses/${course.id}/students`);

  students.forEach((student) => {
    const studentCard = renderStudent(student);
    studentsList.appendChild(studentCard);
  });

  return courseCard;
}

// Function to render the list of courses
async function renderCourses() {
  const coursesList = document.getElementById("courses-list");

  // Fetch the list of courses
  const courses = await api.get("courses");

  courses.forEach(async (course) => {
    const courseCard = await renderCourse(course);
    coursesList.appendChild(courseCard);
  });
}

// Call the renderCourses function when the page is loaded
document.addEventListener("DOMContentLoaded", renderCourses);
