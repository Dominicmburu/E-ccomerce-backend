const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwtConfig');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.authToken || req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.userId = decoded.userId; 
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
