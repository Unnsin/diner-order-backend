import * as mongoose from 'mongoose'

export const BusketSchema = new mongoose.Schema({
    userId: String,
    products: [String],
})