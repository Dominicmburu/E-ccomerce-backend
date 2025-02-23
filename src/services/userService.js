const userModel = require('../models/userModel');

const getUserById = async (id) => {
  return await userModel.getUserById(id);
};

const updateUserDetails = async (id, username, email) => {
  return await userModel.updateUser(id, username, email);
};

module.exports = {
  getUserById,
  updateUserDetails,
};
