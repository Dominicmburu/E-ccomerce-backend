const prisma = require("../config/dbConfig"); // Prisma Client import

const createOrder = async (userId, productId, quantity) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      throw new Error("Product not found");
    }

    const totalPrice = product.price * quantity;

    const order = await prisma.order.create({
      data: {
        user: {
          connect: { id: userId }, 
        },
        totalPrice: totalPrice, 
        status: "pending",
        orderItems: {
          create: {
            productId: productId,
            quantity: quantity,
          },
        },
      },
      include: {
        orderItems: true, 
      },
    });

    return order;
  } catch (error) {
    console.error("Error in createOrder:", error);
    throw new Error("Error creating order");
  }
};

const getOrdersByUserId = async (userId) => {
  const userID = parseInt(userId, 10);

  if (isNaN(userID)) {
    throw new Error("Invalid product ID");
  }

  try {
    return await prisma.order.findMany({
      where: { userId: userID },
      include: {
        orderItems: true,
      },
    });
  } catch (error) {
    console.error("Error in getOrdersByUserId:", error);
    throw new Error("Error fetching orders for user");
  }
};

const getOrderDetails = async (orderId) => {
  const orderID = parseInt(orderId, 10);

    if (isNaN(orderID)) {
      throw new Error("Invalid product ID");
    }
  try {
    return await prisma.order.findUnique({
      where: { id: orderID },
      include: {
        orderItems: true, 
      },
    });
  } catch (error) {
    console.error("Error in getOrderDetails:", error);
    throw new Error("Error fetching order details");
  }
};

module.exports = {
  createOrder,
  getOrdersByUserId,
  getOrderDetails,
};
