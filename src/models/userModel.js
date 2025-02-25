const prisma = require('../config/dbConfig'); 

const getUserByUsername = async (username) => {
  try {
    return await prisma.user.findUnique({
      where: { username }, 
    });
  } catch (error) {
    console.error('Error in getUserByUsername:', error);
    throw new Error('Error fetching user by username');
  }
};

const createUser = async (username, email, password, salt) => {
  try {
    return await prisma.user.create({
      data: {
        username,
        email,
        password, 
        salt,
      },
    });
  } catch (error) {
    console.error('Error in createUser:', error);
    throw new Error('Error creating user');
  }
};

const getUserById = async (id) => {
  try {
    return await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
  } catch (error) {
    console.error('Error in getUserById:', error);
    throw new Error('Error fetching user by ID');
  }
};

const updateUser = async (id, username, email) => {

  try {
    const userId = parseInt(id, 10); 
    if (isNaN(userId)) {
      throw new Error('Invalid user ID');
    }

    return await prisma.user.update({
      where: { id: userId },
      data: { username, email },
    });
  } catch (error) {
    console.error('Error in updateUser:', error);
    throw new Error('Error updating user');
  }
};

module.exports = {
  getUserByUsername,
  createUser,
  getUserById,
  updateUser,
};
