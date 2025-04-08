import user from "../models/user.js"

export const createUser = async (req, res) => {
    const bod = req.body

    try{
        const newUser = new user()
    } catch (error) {

    }
}