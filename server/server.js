import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import dotenv from 'dotenv';
import cors from 'cors';  // Import the cors package

// Import the router from your routes file
import customItemRoutes from './routes/customItemRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// Enable CORS for all routes and origins
app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'lightning.png')));
} else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'lightning.png')));
    app.use(express.static('public'));
}

// Specify the API path for the server to use
app.use('/api', customItemRoutes);

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    );
}

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
});
