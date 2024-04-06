import { Schema, model } from 'mongoose'

const productSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    base_price: {
        type: Number,
        required: false
    },
    stock: {
        type: Number,
        required: false
    },
})

export default model('Product', productSchema);