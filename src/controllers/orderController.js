const { createOrder, getOrdersByUserId, getOrderDetails } = require('../services/orderService');

const placeOrder = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const newOrder = await createOrder(userId, productId, quantity);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUserOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await getOrdersByUserId(userId);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await getOrderDetails(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  placeOrder,
  getUserOrders,
  getOrder,
};
