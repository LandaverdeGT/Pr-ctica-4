import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';
import cors from 'cors';

const app = express();

const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use('/api/auth', authRoutes);  // http://localhost:5000/api/auth/login

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });