import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {type: String, required : true},
    lastName: {type: String, required : true},
    email: {type: String, required : true},
    username: {type: String, required : true},
    created: {
        type: Date,
        default: new Date()
    }
})

const User = mongoose.model('users', userSchema)

export default User