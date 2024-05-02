import jwt from 'jsonwebtoken'

export const getUserFromToken = async (req) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return decoded.userId
    }
    catch (error) {
        return error
    }
}