import { pool } from './database.js';

console.log("Database connection details:");
console.log("User:", process.env.PGUSER);
console.log("Host:", process.env.PGHOST);
console.log("Database:", process.env.PGDATABASE);

const createTables = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS custom_items (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            exterior_color VARCHAR(50),
            features JSONB NOT NULL
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
