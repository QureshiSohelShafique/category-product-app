const productService = require('../services/productService');

// Fetch all products with pagination
const getAllProducts = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const products = await productService.getAllProducts(Number(offset), Number(limit));
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, category_id } = req.body;
    if (!name || !category_id) {
      return res.status(400).json({ error: 'Product name and category ID are required' });
    }
    const product = await productService.createProduct(name, category_id);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category_id } = req.body;
    if (!name || !category_id) {
      return res.status(400).json({ error: 'Product name and category ID are required' });
    }
    await productService.updateProduct(id, name, category_id);
    res.json({ message: 'Product updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
