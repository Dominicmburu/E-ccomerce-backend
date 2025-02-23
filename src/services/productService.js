const productModel = require('../models/productModel');

// Get product by ID
const getProductById = async (id) => {
  return await productModel.getProductById(id);
};

// Create a new product
const createProduct = async (name, price, stock) => {
  return await productModel.createProduct(name, price, stock);
};

// Update product
const updateProduct = async (id, name, price, stock) => {
  return await productModel.updateProduct(id, name, price, stock);
};

// Delete product
const deleteProduct = async (id) => {
  return await productModel.deleteProduct(id);
};

module.exports = {
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
