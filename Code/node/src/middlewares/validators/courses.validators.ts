import {
    Request,
    Response,
    NextFunction
} from 'express';
import Joi, {
    ValidationResult
} from 'joi';

export const courseSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    credits: Joi.number().required().min(1)
});

export const validateCourse = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const result: ValidationResult =
        courseSchema.validate(
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