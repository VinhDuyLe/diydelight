import { pool } from '../config/database.js'; 

export const getCarById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM custom_items WHERE id = $1', [id]);
        res.json(result.rows[0]); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};
