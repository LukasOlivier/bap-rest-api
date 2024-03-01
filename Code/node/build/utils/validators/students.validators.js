"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateStudent = exports.studentSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.studentSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    age: joi_1.default.number().integer().required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().required(),
});
var validateStudent = function (req, res, next) {
    var result = exports.studentSchema.validate(req.body, { abortEarly: false });
    if (result.error) {
        return res.status(422).json({
            message: 'Invalid request data',
            errors: result.error.details.map(function (err) { return err.message; }),
        });
    }
    next();
};
exports.validateStudent = validateStudent;
