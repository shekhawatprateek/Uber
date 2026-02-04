const userModel = require("../models/user.model");
const { createUser } = require("../services/user.service");
const { validationResult } = require("express-validator");

const registerUser = async (req, res, next) => {
  const error = validationResult(req);

  console.log(error.isEmpty());

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { fullname, email, password } = req.body;

  const hashedPassword = await userModel.hashedPassword(password);

  console.log(hashedPassword);

  const user = await createUser({
    firstname: fullname["firstname"],
    lastname: fullname["lastname"],
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};

const loginUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = user.generateAuthToken();

  res.status(200).json({ token, user });
};

module.exports = {
  registerUser,
  loginUser,
};
