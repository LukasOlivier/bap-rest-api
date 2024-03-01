"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var students_controllers_1 = require("../controllers/students.controllers");
var students_validators_1 = require("../utils/validators/students.validators");
var router = (0, express_1.Router)();
router.get('/', students_controllers_1.getStudentsController);
router.get('/:id', students_controllers_1.getStudentController);
router.post('/', students_validators_1.validateStudent, students_controllers_1.createStudentController);
router.delete('/:id', students_controllers_1.deleteStudentController);
exports.default = router;