import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    identification: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    metadata: {
        special_prices: [{
            product_name: {
                type: String,
                required: true
            },
            special_price: {
                type: Number,
                required: true
            }
        }],
    }
})

export default model('User', userSchema);