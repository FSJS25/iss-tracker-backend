const router = require('express').Router();

const User = require('../models/User');

// Get all users
router.get('/', (req, res) => {
    User.find().then(users => res.json(users));
});

module.exports = router;