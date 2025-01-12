require('dotenv').config();

const connectDb = require('./utils/connectDb');
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;

connectDb();

const app = express();

app.use(express.json());
app.use(cors());

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');

app.use('/api/auth', authRoutes);
app.use('/api/users', authMiddleware, userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

