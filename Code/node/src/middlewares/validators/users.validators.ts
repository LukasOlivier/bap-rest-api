import {
    Request,
    Response,
    NextFunction
} from 'express';
import Joi, {
    ValidationResult
} from 'joi';

export const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(1),
});

export const validateUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const result: ValidationResult =
        userSchema.validate(
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