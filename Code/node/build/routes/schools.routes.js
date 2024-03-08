"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var schools_controllers_1 = require("../controllers/schools.controllers");
var jwt_1 = require("../middlewares/authentication/jwt");
var router = (0, express_1.Router)();
router.get('/', jwt_1.verifyJWT, schools_controllers_1.getSchoolsController);
router.get('/:id/students', jwt_1.verifyJWT, schools_controllers_1.getSchoolStudentsController);
exports.default = router;
