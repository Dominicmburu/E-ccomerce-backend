const prisma = require('../config/dbConfig'); 

const getAllProducts = async () => {
  try {
    return await prisma.product.findMany();
  } catch (error) {
    console.error('Error in getAllProducts:', error);
    throw new Error('Error fetching all products');
  }
};


const getProductById = async (id) => {
  try {

    const productID = parseInt(id, 10);

    if(isNaN(productID)){
      throw new Error('Invalid product ID');
    }

    return await prisma.product.findUnique({
      where: { id: productID },
    });
  } catch (error) {
    console.error('Error in getProductById:', error);
    throw new Error('Error fetching product by ID');
  }
};

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

const updateProduct = async (id, name, price, stock) => {
  try {
    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
      throw new Error("Invalid product ID");
    }

    return await prisma.product.update({
      where: { id: productId },
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

const deleteProduct = async (id) => {
  try {
    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
      throw new Error("Invalid product ID");
    }

    return await prisma.product.delete({
      where: { id: productId },
    });
  } catch (error) {
    console.error('Error in deleteProduct:', error);
    throw new Error('Error deleting product');
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
