import express from 'express';
import { getCarById } from '../controllers/carsController.js'; // Import the controller function

const router = express.Router();

// Define the route to fetch car details by ID
router.get('/cars/:id', getCarById);

export default router;
