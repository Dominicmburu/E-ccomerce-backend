const prisma = require('../config/dbConfig');  // Prisma Client import

const createOrder = async (userId, productId, quantity) => {
  try {
    return await prisma.order.create({
      data: {
        userId,
        totalPrice: quantity * productId.price, // Assuming you calculate total price here
        status: 'pending',  // Default status for a new order
        orderItems: {
          create: {
            productId,
            quantity,
          },
        },
      },
      include: {
        orderItems: true,  // Include related order items
      },
    });
  } catch (error) {
    console.error('Error in createOrder:', error);
    throw new Error('Error creating order');
  }
};

const getOrdersByUserId = async (userId) => {
  try {
    return await prisma.order.findMany({
      where: { userId: userId },
      include: {
        orderItems: true,  // Include related order items for each order
      },
    });
  } catch (error) {
    console.error('Error in getOrdersByUserId:', error);
    throw new Error('Error fetching orders for user');
  }
};

// Get order details by order ID
const getOrderDetails = async (orderId) => {
  try {
    return await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        orderItems: true,  // Include related order items for the order
      },
    });
  } catch (error) {
    console.error('Error in getOrderDetails:', error);
    throw new Error('Error fetching order details');
  }
};

module.exports = {
  createOrder,
  getOrdersByUserId,
  getOrderDetails,
};
