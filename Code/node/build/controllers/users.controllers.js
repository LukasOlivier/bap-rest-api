"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.createUserController = exports.getUsersController = void 0;
var users_models_1 = require("../models/users.models");
var getUsersController = function (req, res) {
    var users = (0, users_models_1.getUsers)();
    res.status(200).json({ users: users });
};
exports.getUsersController = getUsersController;
var createUserController = function (req, res) {
    var user = req.body;
    (0, users_models_1.createUser)(user);
    res.status(201).json({
        message: 'User created',
        user: user,
    });
};
exports.createUserController = createUserController;
var deleteUserController = function (req, res) {
    var id = parseInt(req.params.id, 10);
    (0, users_models_1.deleteUser)(id);
    res.status(200).json({
        message: "User ".concat(id, " deleted"),
    });
};
exports.deleteUserController = deleteUserController;
