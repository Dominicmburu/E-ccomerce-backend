const { registerUser, loginUser } = require('../services/authService');
const { sendTokenInCookie } = require('../services/authService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, password, email } = req.body;

  console.log('Request body:', username, password, email);

  if (!username || !password || !email) {
    return res.status(400).json({ message: 'Username, email, and password are required' });
  }

  try {

    const newUser = await registerUser(username, email, password);

    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    sendTokenInCookie(res, token);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error in register:', error);
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {

    const user = await loginUser(username, password);

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    sendTokenInCookie(res, token);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({ error: error.message });
  }
};

const logout = (req, res) => {
  try {
    res.cookie('token', '', { expires: new Date(0), httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error in logout:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  register,
  login,
  logout,
};
