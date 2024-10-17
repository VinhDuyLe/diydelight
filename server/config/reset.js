import { pool } from './database.js';
import dotenv from 'dotenv';
dotenv.config();

const createTables = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS public.custom_items (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            price DECIMAL(10, 2),
            exterior_color VARCHAR(50),  -- New column for exterior color
            features JSONB
        );
    `;
    try {
        const result = await pool.query(query);
        console.log('Tables created:', result);
    } catch (err) {
        console.error('Error creating tables:', err);
    } finally {
        pool.end();
    }
};

createTables();
