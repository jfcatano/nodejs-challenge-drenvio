import { Router } from "express";
import User from "../models/user.js"

const router = Router();

// Route to get all users.
router.get('/users', async (req, res) => {

    const users = await User.find()

    res.status(200).json(users)
})

// Route to create new users.
router.post('/users/create', async (req, res) => {

    const usersData = req.body

    try {
        const savedUsers = await User.insertMany(usersData)
        res.status(200).json(savedUsers)

    } catch (error) {
        res.status(500).send({ message: 'Error creating new users.', error })
    }

})

export default router;