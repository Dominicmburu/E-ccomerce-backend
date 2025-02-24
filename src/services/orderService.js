const orderModel = require('../models/orderModel');

const createOrder = async (userId, productId, quantity) => {
  return await orderModel.createOrder(userId, productId, quantity);
};

const getOrdersByUserId = async (userId) => {
  return await orderModel.getOrdersByUserId(userId);
};

const getOrderDetails = async (orderId) => {
  return await orderModel.getOrderDetails(orderId);
};

module.exports = {
  createOrder,
  getOrdersByUserId,
  getOrderDetails,
};
