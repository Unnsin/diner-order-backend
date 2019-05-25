import * as mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
    "image": String,
    "price": Number,
    "weight": Number,
    "name": String,
})