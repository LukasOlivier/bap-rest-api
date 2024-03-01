"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.createUserController = exports.getUserByIdController = exports.getUsersController = void 0;
var users_models_1 = require("../models/users.models");
var getUsersController = function (req, res) {
    var users = (0, users_models_1.getUsers)();
    res.status(200).json({ users: users });
};
exports.getUsersController = getUsersController;
var getUserByIdController = function (req, res) {
    var id = parseInt(req.params.id, 10);
    var user = (0, users_models_1.getUserById)(id);
    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(404).json({ message: 'User not found' });
    }
};
exports.getUserByIdController = getUserByIdController;
var createUserController = function (req, res) {
    var user = req.body;
    (0, users_models_1.createUser)(user);
    res.status(201).json({
        message: 'User created',
        user: user,
    });
};
exports.createUserController = createUserController;
var updateUserController = function (req, res) {
    var id = parseInt(req.params.id, 10);
    var userUpdate = req.body;
    userUpdate.id = id;
    (0, users_models_1.updateUser)(userUpdate);
    res.status(200).json({
        message: 'User updated',
        user: userUpdate,
    });
};
exports.updateUserController = updateUserController;
var deleteUserController = function (req, res) {
    var id = parseInt(req.params.id, 10);
    (0, users_models_1.deleteUser)(id);
    res.status(200).json({
        message: "User ".concat(id, " deleted"),
    });
};
exports.deleteUserController = deleteUserController;
