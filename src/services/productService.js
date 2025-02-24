const productModel = require('../models/productModel');

const getAllProducts = async () => {
  try {
    return await productModel.getAllProducts();
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    throw new Error('Error fetching all products');
  }
};

const getProductById = async (id) => {
  return await productModel.getProductById(id);
};

const createProduct = async (name, price, stock) => {
  return await productModel.createProduct(name, price, stock);
};

const updateProduct = async (id, name, price, stock) => {
  return await productModel.updateProduct(id, name, price, stock);
};

const deleteProduct = async (id) => {
  return await productModel.deleteProduct(id);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
