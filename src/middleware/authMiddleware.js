// src/middleware/authMiddleware.js
require('dotenv').config();
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Retrieve the token from the Authorization header
    const authHeader = req.headers['authorization']; // Header keys are case-insensitive
    const token = authHeader && authHeader.startsWith('Bearer ')
        ? authHeader.split(' ')[1] // Extract the token after "Bearer "
        : null;

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user; // Assuming the payload contains a `user` property
        next(); // Call the next middleware or route handler
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
