import { Router } from "express";
import User from "../models/user.js";
import Product from "../models/product.js";

const router = Router();

// Route to get all users.
router.get('/price/:user_id/:product_name', async (req, res) => {

    const { user_id, product_name } = req.params;

    try {

        const user = await User.findById(user_id);

        // Verify if the user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find product by his name | Verify if product exists
        const product = await Product.findOne({ name: product_name });

        // If product doesn't exist
        if (!product) {
            return res.status(404).json({ message: 'Product not found', product_name });
        }

        // Verify if the user have a special price for this product.
        const specialPrice = user.metadata.special_prices.find(product => product.product_name === product_name);

        // If special price have a value, return the special price, else return the base price.
        if (specialPrice) {
            return res.status(200).json({ special_price: specialPrice.special_price });

        } else {
            return res.status(200).json({ base_price: product.base_price });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

});

export default router;