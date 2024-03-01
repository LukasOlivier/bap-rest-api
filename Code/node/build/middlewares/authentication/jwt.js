"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var jwt_1 = require("../../config/jwt");
var verifyJWT = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    var token = authHeader.split(' ')[1];
    jsonwebtoken_1.default.verify(token, jwt_1.secretKey, function (err, user) {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.body.userId = user.userId;
        next();
    });
};
exports.verifyJWT = verifyJWT;
