const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const { secret, expiresIn } = require('../config/jwtConfig');

const generateToken = (userId) => {
  return jwt.sign({ userId }, secret, { expiresIn });
};

const getUserIfExists = async (username) => {
  const user = await userModel.getUserByUsername(username);
  return user;
};

const registerUser = async (username, email, password) => {

  try {
    const existingUser = await getUserIfExists(username);
    if (existingUser) {
      throw new Error('User already exists');
    }

    console.log('Attempting to register user:', username, email);
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const result = await userModel.createUser(username, email, hashedPassword);
    console.log('Registration result:', result);
    return result;
  } catch (err) {
    console.error('Error in registerUser:', err);
    throw new Error('Error registering user');
  }
};

const loginUser = async (username, password) => {
  try {
    const user = await getUserIfExists(username);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    return user;
  } catch (err) {
    throw new Error('Error during login');
  }
};

const sendTokenInCookie = (res, token) => {
  res.cookie('authToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600000, 
  });
};

module.exports = {
  generateToken,
  registerUser,
  loginUser,
  sendTokenInCookie,
};
