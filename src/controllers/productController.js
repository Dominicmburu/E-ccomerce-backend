const { getProductById, createProduct, updateProduct, deleteProduct } = require('../services/productService');

const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addProduct = async (req, res) => {
  const { name, price, stock } = req.body;

  try {
    const newProduct = await createProduct(name, price, stock);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const modifyProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  try {
    const updatedProduct = await updateProduct(id, name, price, stock);
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const removeProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await deleteProduct(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getProduct,
  addProduct,
  modifyProduct,
  removeProduct,
};
