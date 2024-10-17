import { pool } from '../config/database.js';

export const getAllItems = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM custom_items');
        console.log(result.rows);  // Log fetched data
        res.json(result.rows);     // Send all rows as JSON
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};


export const createItem = async (req, res) => {
    try {
        console.log("Received request body:", req.body); // Log the body
        const { name, price, exterior_color, features } = req.body;

        if (!name || !price || !features) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const result = await pool.query(
            'INSERT INTO custom_items (name, price, exterior_color, features) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, price, exterior_color, features]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error inserting into database:', err); // Log the error
        res.status(500).json({ error: 'Failed to create item' });
    }
};



export const updateItem = async (req, res) => {
    const { id } = req.params;
    const { name, price, features } = req.body;
    const result = await pool.query(
        'UPDATE custom_items SET name = $1, price = $2, features = $3 WHERE id = $4 RETURNING *',
        [name, price, features, id]
    );
    res.json(result.rows[0]);
};

export const deleteItem = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM custom_items WHERE id = $1', [id]);
    res.sendStatus(204);
};

export const getItemById = async (req, res) => {
    const { id } = req.params;
    const { rows } = await pool.query('SELECT * FROM custom_items WHERE id = $1', [id]);
    res.json(rows[0]);
  };
  
