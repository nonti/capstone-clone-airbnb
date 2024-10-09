import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';


// Middleware to verify JWT token
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Get token from header
  token = req.cookies.access_token;
  // Check if token exists
  if (token) {
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');

      if (req.user && (req.user.role === 'host' || req.user.role === 'user')) {
        next();
      } else {
        res.status(403); // Forbidden
        throw new Error('Not authorized, user is neither host nor user');
      }
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, invalid token');
    }
  }else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export { protect };