"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var courses_controllers_1 = require("../controllers/courses.controllers");
var courses_validators_1 = require("../middlewares/validators/courses.validators");
var jwt_1 = require("../middlewares/authentication/jwt");
var router = (0, express_1.Router)();
router.post('/', jwt_1.verifyJWT, courses_validators_1.validateCourse, courses_controllers_1.createCourseController);
router.delete('/:id', jwt_1.verifyJWT, courses_controllers_1.deleteCourseController);
router.get('/:id/students', jwt_1.verifyJWT, courses_controllers_1.getCourseStudentsController);
exports.default = router;
