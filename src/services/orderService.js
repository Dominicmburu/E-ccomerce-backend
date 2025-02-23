const orderModel = require('../models/orderModel');

// Create an order
const createOrder = async (userId, productId, quantity) => {
  return await orderModel.createOrder(userId, productId, quantity);
};

// Get orders by user ID
const getOrdersByUserId = async (userId) => {
  return await orderModel.getOrdersByUserId(userId);
};

// Get order details
const getOrderDetails = async (orderId) => {
  return await orderModel.getOrderDetails(orderId);
};

module.exports = {
  createOrder,
  getOrdersByUserId,
  getOrderDetails,
};
