const prisma = require('../config/dbConfig');  // Prisma Client import

// Get product by ID
const getProductById = async (id) => {
  try {
    return await prisma.product.findUnique({
      where: { id: id },
    });
  } catch (error) {
    console.error('Error in getProductById:', error);
    throw new Error('Error fetching product by ID');
  }
};

// Create new product
const createProduct = async (name, price, stock) => {
  try {
    return await prisma.product.create({
      data: {
        name,
        price,
        stock,
      },
    });
  } catch (error) {
    console.error('Error in createProduct:', error);
    throw new Error('Error creating product');
  }
};

// Update existing product
const updateProduct = async (id, name, price, stock) => {
  try {
    return await prisma.product.update({
      where: { id: id },
      data: {
        name,
        price,
        stock,
      },
    });
  } catch (error) {
    console.error('Error in updateProduct:', error);
    throw new Error('Error updating product');
  }
};

// Delete a product by ID
const deleteProduct = async (id) => {
  try {
    return await prisma.product.delete({
      where: { id: id },
    });
  } catch (error) {
    console.error('Error in deleteProduct:', error);
    throw new Error('Error deleting product');
  }
};

module.exports = {
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
