const express = require('express');
const router = express.Router();

// GET all products
router.get('/', (req, res) => {
  // Placeholder logic to get all products
  res.send('GET all products');
});

// GET product by ID
router.get('/:id', (req, res) => {
  // Placeholder logic to get product by ID
  res.send(`GET product by ID: ${req.params.id}`);
});

// POST create a new product
router.post('/', (req, res) => {
  // Placeholder logic to create a new product
  res.send('POST create a new product');
});

// PUT update an existing product
router.put('/:id', (req, res) => {
  // Placeholder logic to update an existing product
  res.send(`PUT update product by ID: ${req.params.id}`);
});

// DELETE delete a product by ID
router.delete('/:id', (req, res) => {
  // Placeholder logic to delete a product by ID
  res.send(`DELETE product by ID: ${req.params.id}`);
});

module.exports = router;
