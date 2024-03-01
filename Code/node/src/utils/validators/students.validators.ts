import {
    Request,
    Response,
    NextFunction
} from 'express';
import Joi, {
    ValidationResult
} from 'joi';

export const studentSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().integer().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
});

export const validateStudent = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const result: ValidationResult =
        studentSchema.validate(
            req.body,
            { abortEarly: false }
        );
    if (result.error) {
        return res.status(422).json({
            message: 'Invalid request data',
            errors: result.error.details.map(err => err.message),
        });
    }
    next();
};