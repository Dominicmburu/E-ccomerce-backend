const rateLimit = require("express-rate-limit");
const { windowMs, max, message } = require("../config/rateLimitConfig");

const rateLimitMiddleware = rateLimit({
  windowMs,
  max,
  message,
});

module.exports = rateLimitMiddleware;
