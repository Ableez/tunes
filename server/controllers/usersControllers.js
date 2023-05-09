const User = require("../models/User");
const Task = require("../models/Task");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");

  if (users.length === 0) {
    return res.status(400).json({ message: "No users found" });
  }
  res.json(users);
});

// @desc Create new users
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All feilds are required" });
  }
  const duplicate = await User.findOne({ username }).exec();

  if (duplicate) {
    return res.status(409).json({ message: "Username already exists" });
  }

  const hashedPwd = await bcrypt.hash(password, 10);

  const userObj = {
    username,
    email,
    password: hashedPwd,
  };

  const createUser = await User.create(userObj);
  if (createUser) {
    return res
      .status(201)
      .json({ message: `${username} account has been created` });
  } else {
    return res.status(400).json({ message: "Invalid user data provided" });
  }
});

// @desc Get a user's tasks
// @route GET /users
// @access Private

const getUserTasks = asyncHandler(async (req, res) => {
  const { ownerId } = req.body;

  if (!ownerId) {
    return res.status(409).json({ message: "Please insert a user ID" });
  }
  const userTasks = await Task.findOne({ ownerId }).exec();

  if (!userTasks) {
    return res.status(400).json({ message: "User has no tasks" });
  }
  res.json(userTasks);
});

// @desc Update a users
// @route PATCH /users
// @access Private

const updateUser = asyncHandler(async (req, res) => {
  const { username, password, email, userId } = req.body;

  if (!username && !password && !email) {
    return res.status(400).json({ message: "Provide a feild" });
  }

  const user = await User.findById(mongoose.Types.ObjectId(userId)).exec();
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const duplicate = await User.findOne({ username }).exec();
  if (duplicate && duplicate?._id.toString() !== userId) {
    return res.status(409).json({ message: "Username already exists" });
  }

  if (email) {
    user.email = email;
  }
  if (username) {
    user.username = username;
  }
  if (password) {
    user.password = await bcrypt.hash(password, 10);
  }
  const updatedUser = await user.save();

  res.json({ message: `${updatedUser.username} is successfully updated` });
});

// @desc Delete a users
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ message: "Please provide an ID" });
  }
  const user = await User.findById(mongoose.Types.ObjectId(userId)).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const result = await user.deleteOne();

  const reply = `Username ${result.username} with ID ${result._id} has been deleted`;

  res.json(reply);
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
  getUserTasks,
};
