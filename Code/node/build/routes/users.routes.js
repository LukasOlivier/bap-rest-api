"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_controllers_1 = require("../controllers/users.controllers");
var router = (0, express_1.Router)();
router.get('/', users_controllers_1.getUsersController);
router.delete('/:id', users_controllers_1.deleteUserController);
router.post('/login', users_controllers_1.loginController);
exports.default = router;
