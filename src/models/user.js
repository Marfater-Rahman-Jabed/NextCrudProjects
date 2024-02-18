import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    email: String,
    password: String,
    role: String
})

export const user = mongoose.models.users || mongoose.model('users', userSchema)
