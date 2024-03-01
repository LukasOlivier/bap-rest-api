"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var enrollments_controllers_1 = require("../controllers/enrollments.controllers");
var jwt_1 = require("../middlewares/authentication/jwt");
var router = (0, express_1.Router)();
router.post('/', jwt_1.verifyJWT, enrollments_controllers_1.enrollStudentController);
router.delete('/', jwt_1.verifyJWT, enrollments_controllers_1.unenrollStudentController);
exports.default = router;
