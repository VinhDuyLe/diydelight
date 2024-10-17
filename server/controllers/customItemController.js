import { pool } from '../config/database.js';

export const getAllItems = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM custom_items');
    res.json(rows);
};

export const createItem = async (req, res) => {
    const { name, price, features } = req.body;
    const result = await pool.query(
        'INSERT INTO custom_items (name, price, features) VALUES ($1, $2, $3) RETURNING *',
        [name, price, features]
    );
    res.json(result.rows[0]);
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
