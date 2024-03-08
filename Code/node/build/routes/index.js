"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var students_routes_1 = __importDefault(require("./students.routes"));
var users_routes_1 = __importDefault(require("./users.routes"));
var schools_routes_1 = __importDefault(require("./schools.routes"));
var router = (0, express_1.Router)();
router.use('/students', students_routes_1.default);
router.use('/users', users_routes_1.default);
router.use('/schools', schools_routes_1.default);
exports.default = router;
