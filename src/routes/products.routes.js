import { Router } from "express";
import Product from "../models/product.js";

const router = Router();

// Find all products with stock. 
router.get('/products', async (req, res) => {

    try {
        // The query operator "$gt: 0" search all products that are greater than 0.
        const availableProducts = await Product.find({ stock: { $gt: 0 } })

        res.status(200).json({ message: 'Available products: ', availableProducts });

    } catch (error) {
        res.status(500).json({ message: 'Error finding available products.' });
    }
});

// Find all products. With and without stock.
router.get('/products/all', async (req, res) => {

    try {
        const availableProducts = await Product.find()

        res.status(200).json({ message: 'All registered products: ', availableProducts });

    } catch (error) {
        res.status(500).json({ message: 'Error finding all registered products.' });
    }
});

// Route to create new products.
router.post('/products/create', async (req, res) => {

    const productsData = req.body

    try {
        const savedProducts = await Product.insertMany(productsData)
        res.status(200).json(savedProducts)

    } catch (error) {
        res.status(500).send({ message: 'Error creating new products.', error })
    }
    
})

export default router;