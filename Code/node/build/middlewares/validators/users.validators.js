"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = exports.userSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.userSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required().min(1),
});
var validateUser = function (req, res, next) {
    var result = exports.userSchema.validate(req.body, { abortEarly: false });
    if (result.error) {
        return res.status(422).json({
            message: 'Invalid request data',
            errors: result.error.details.map(function (err) { return err.message; }),
        });
    }
    next();
};
exports.validateUser = validateUser;
