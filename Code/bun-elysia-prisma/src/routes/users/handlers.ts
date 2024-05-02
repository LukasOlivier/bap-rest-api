import db from '../../db'
import jwt from 'jsonwebtoken';

export const login = async ({ body }) => {
    const user = await db.Users.findUnique({
        where: {
            email: body.email
        }
    })

    if (!user) {
        return 'User not found'
    }

    if (user.password !== body.password) {
        return 'Invalid credentials'
    }

    console.log(user)
    const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

    return { token };
}