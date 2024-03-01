"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_controllers_1 = require("../controllers/users.controllers");
var users_validators_1 = require("../utils/validators/users.validators");
// New Router instance
var router = (0, express_1.Router)();
// Users routes
router.get('/', users_controllers_1.getUsersController);
router.post('/', // path
users_validators_1.validateUser, // middleware
users_controllers_1.createUserController // controller
);
router.delete('/:id', users_controllers_1.deleteUserController);
exports.default = router;
