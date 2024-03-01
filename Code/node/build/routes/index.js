"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var courses_routes_1 = __importDefault(require("./courses.routes"));
var students_routes_1 = __importDefault(require("./students.routes"));
var users_routes_1 = __importDefault(require("./users.routes"));
var enrollments_routes_1 = __importDefault(require("./enrollments.routes"));
var router = (0, express_1.Router)();
router.use('/courses', courses_routes_1.default);
router.use('/enroll', enrollments_routes_1.default);
router.use('/students', students_routes_1.default);
router.use('/users', users_routes_1.default);
exports.default = router;
