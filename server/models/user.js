import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    created: {
        type: Date,
        default: new Date()
    }
})

const user = mongoose.model('user', userSchema)

export default user