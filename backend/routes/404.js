const express = require('express');
const router = express.Router();

// Middleware to handle 404 errors
router.use((req, res, next) => {
    res.status(404).send({
        error: 'Not Found',
        message: 'The requested resource was not found on this server.',
        status: 404
    });
});

module.exports = router;