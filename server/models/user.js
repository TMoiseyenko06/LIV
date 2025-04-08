import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    subjectId: String,
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    created: {
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('users', userSchema)

export default User