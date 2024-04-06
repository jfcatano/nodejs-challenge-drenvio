import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Routes import
import productsRoutes from './src/routes/products.routes.js'
import usersRoutes from './src/routes/users.routes.js'
import pricesRoutes from './src/routes/prices.routes.js'


// Express and environment variables setup
const app = express()
app.use(express.json());
dotenv.config();

// MongoDB connection.
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting with MongoDB: '));
db.once('open', () => {
    console.log('Succesfulluy connected to MongoDB.');
});

// Routes urls
app.use("/api", productsRoutes)
app.use("/api", usersRoutes)
app.use("/api", pricesRoutes)

export default app