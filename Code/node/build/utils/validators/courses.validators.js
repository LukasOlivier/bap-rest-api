"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCourse = exports.courseSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.courseSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    credits: joi_1.default.number().required().min(1)
});
var validateCourse = function (req, res, next) {
    var result = exports.courseSchema.validate(req.body, { abortEarly: false });
    if (result.error) {
        return res.status(422).json({
            message: 'Invalid request data',
            errors: result.error.details.map(function (err) { return err.message; }),
        });
    }
    next();
};
exports.validateCourse = validateCourse;
