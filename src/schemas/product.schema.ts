import * as mongoose from 'mongoose'

export const ProductSchema = new mongoose.Schema({
    image: String,
    price: String,
    weight: String,
    name: String,
})