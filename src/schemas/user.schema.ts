import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    name: String,
    lname: String,
    login: String,
    phone: String,
    email: String,
    password: String,
    role: Number,
})