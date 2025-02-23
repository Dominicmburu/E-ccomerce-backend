const prisma = require('../config/dbConfig');  // Assuming dbConfig.js exports PrismaClient

const getUserByUsername = async (username) => {
  try {
    return await prisma.user.findUnique({
      where: { username }, // Find user where username is unique
    });
  } catch (error) {
    console.error('Error in getUserByUsername:', error);
    throw new Error('Error fetching user by username');
  }
};

const createUser = async (username, email, password) => {
  try {
    return await prisma.user.create({
      data: {
        username,
        email,
        password, 
      },
    });
  } catch (error) {
    console.error('Error in createUser:', error);
    throw new Error('Error creating user');
  }
};

module.exports = {
  getUserByUsername,
  createUser,
};
