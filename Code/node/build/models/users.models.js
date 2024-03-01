"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
var users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@test.com',
        password: '123456',
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@test.com',
        password: 'secret',
    },
    {
        id: 3,
        name: 'Jack Doe',
        email: 'jack.doe@test.com',
        password: 'password',
    },
];
var getUsers = function () {
    return users;
};
exports.getUsers = getUsers;
var getUserById = function (id) {
    return users.find(function (user) { return user.id === id; });
};
exports.getUserById = getUserById;
var createUser = function (user) {
    users.push(user);
};
exports.createUser = createUser;
var updateUser = function (user) {
    var index = users.findIndex(function (u) { return u.id === user.id; });
    users[index] = user;
};
exports.updateUser = updateUser;
var deleteUser = function (id) {
    var index = users.findIndex(function (u) { return u.id === id; });
    users.splice(index, 1);
};
exports.deleteUser = deleteUser;
