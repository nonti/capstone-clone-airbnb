import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';
import generateToken from '../utils/generateToken.js';

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const signup = asyncHandler(async(req, res) => {
 
  const { username, email, password , role} = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const  user = await User.create({
    username,
    email,
    password,
    role
  });
  if (user ) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  }else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Auth user & set token
// @route   POST /api/users/auth
// @access  Public
const signin = asyncHandler(async(req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({ username });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});


// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async(req, res) => {
  const user = {
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    role: req.user.role,
  };
  
  
  res.status(200).json(user);
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async(req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updated_user = await user.save();

    res.json({
      _id: updated_user._id,
      username: updated_user.username,
      email: updated_user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    signout user & clear cookie
// @route   POST /api/users/signout
// @access  Private
const signout = asyncHandler(async(req, res) => {
  res.cookie('access_token', '', {
    httpOnly: true,
    expires: new Date(0),
  })
  
  res.status(200).json({ message: 'Signout successful' });
});

export {
    signin,
    signup,
    getUserProfile,
    updateUserProfile,
    signout,
};