require('dotenv').config();

const connectDb = require('./utils/connectDb');
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;

connectDb();

const app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

