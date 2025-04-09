import User from "../models/user.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export const signUp = async (req, res) => {
    const { email, password, firstName, lastName, userName } = req.body
    try{
        const existingUser = User.findOne({ email })
        
        if (existingUser) return res.status(400).json({"Message":"User Already Exists"})

        const hashedPassword = await bcrypt.hash(password,12)
        const result = await User.create({ email, hashedPassword, firstName, lastName, userName })
        const token = jwt.sign({ email: result.email, id: result._id}, SECRET, {expiresIn : '1h'})

        res.status(200).json({ result, token })

    }catch(error){
        res.status(500).json({"Something went wrong":error})
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body
    try{
        const existingUser = User.findOne({ email })

        if (!existingUser) return res.status(401).json({"Message":"User does not exist"})
        
        const passwordTrue = bcrypt.compare(password, existingUser.password)

        if (!passwordTrue) return res.status(400).json({"Message":"Password is not correct"})

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET, {expiresIn : "1h"})

        res.status(200).json({ existingUser, token })
    }catch(error){

    }
}