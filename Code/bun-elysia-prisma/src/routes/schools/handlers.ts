import db from '../../db'
import { getUserFromToken } from '../../helpers/getUserFromToken'

export const getSchoolStudents = async (req) => {
    try {
        const userId = await getUserFromToken(req)

        const school = await db.Schools.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })

        if (!school) {
            return 'School not found'
        }

        if (school.ownerId !== userId) {
            return 'Unauthorized'
        }

        return await db.Students.findMany({
            where: {
                schoolId: parseInt(req.params.id)
            }
        })

    }
    catch (error) {
        return error
    }
}

export const getSchools = async (req) => {
    try {
        const userId = await getUserFromToken(req)

        return await db.Schools.findMany({
            where: {
                ownerId: userId
            }
        })
    }
    catch (error) {
        return error
    }
}
