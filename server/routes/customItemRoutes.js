import express from 'express';
import {
  getAllItems,
  getItemById,    // Add this if you need to get an item by ID
  createItem,
  updateItem,
  deleteItem
} from '../controllers/customItemController.js';

const router = express.Router();

router.get('/items', getAllItems);
router.get('/items/:id', getItemById); 
router.post('/items', createItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

export default router;
