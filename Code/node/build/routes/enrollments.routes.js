"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var enrollments_controllers_1 = require("../controllers/enrollments.controllers");
var router = (0, express_1.Router)();
router.post('/', enrollments_controllers_1.enrollStudentController);
router.delete('/', enrollments_controllers_1.unenrollStudentController);
exports.default = router;
