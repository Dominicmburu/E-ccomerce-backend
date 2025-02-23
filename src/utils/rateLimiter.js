const rateLimit = require('express-rate-limit');
const { windowMs, max, message } = require('../config/rateLimitConfig');

const rateLimiter = rateLimit({
  windowMs,  
  max,       
  message,
});

module.exports = rateLimiter;
