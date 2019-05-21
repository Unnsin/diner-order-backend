import * as mongoose from 'mongoose'
import { ProductSchema } from './product.schema'

export const OrderSchema = new mongoose.Schema({
    totalPrice: Number,
    products: [ProductSchema],
    adress: String,
})