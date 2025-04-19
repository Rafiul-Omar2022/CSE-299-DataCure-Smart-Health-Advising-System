const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Importing routes
const homeRoutes = require('./routes/homeRoutes.js');
const notFoundRoutes = require('./routes/404.js');

app.use('/', homeRoutes); // Home route
app.use(notFoundRoutes); // 404 route should be the last one

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});