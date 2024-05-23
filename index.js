const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

// Middleware, database connection, error handling, etc.

// Mount routes
app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
