import db from '../../db'
import { getUserFromToken } from '../../helpers/getUserFromToken'

export const getStudents = async () => {
    try {
        return await db.Students.findMany({
            where: {
                schoolId: null
            }
        })
    }
    catch (error) {
        return error
    }
}

export const createStudent = async (req) => {
    try {
        return await db.Students.create({
            data: req.body
        })
    }
    catch (error) {
        return error
    }
}

export const deleteStudent = async (req) => {
    try {
        const student = await db.Students.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        if (!student) {
            return res.status(404).send('Student not found')
        }
        return await db.Students.delete({
            where: {
                id: parseInt(req.params.id)
            }
        })
    }
    catch (error) {
        return error
    }
}

export const enrollStudent = async (req) => {
    try {
        const userId = await getUserFromToken(req)

        const student = await db.Students.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })

        if (!student) {
            throw new Error('Student not found')
        }

        if (student.schoolId) {
            throw new Error('Student is already enrolled in a school')
        }

        const school = await db.Schools.findUnique({
            where: {
                id: parseInt(req.params.schoolId)
            }
        })

        if (!school) {
            throw new Error('School not found')
        }

        if (school.ownerId !== userId) {
            throw new Error('Unauthorized')
        }

        return await db.Students.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                schoolId: parseInt(req.params.schoolId)
            }
        })

    }
    catch (error) {
        return error
    }
}

export const withdrawStudent = async (req) => {
    try {
        const userId = await getUserFromToken(req)

        const student = await db.Students.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })

        if (!student) {
            throw new Error('Student not found')
        }

        const school = await db.Schools.findUnique({
            where: {
                id: parseInt(req.params.schoolId)
            }
        })

        if (!school) {
            throw new Error('School not found')
        }

        if (school.ownerId !== userId) {
            throw new Error('Unauthorized')
        }

        return await db.Students.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                schoolId: null
            }
        })
    }
    catch (error) {
        return error
    }
}
