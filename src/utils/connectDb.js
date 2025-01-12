require('dotenv').config(); 
const mongoose = require('mongoose');
const MONGO_STRING = process.env.MONGO_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_STRING);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDb;