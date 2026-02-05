const captianModel = require("../models/captian.model");
const captianService = require("../services/captian.service");
const { validationResult } = require("express-validator");
const BlacklistTokenModel = require("../models/blacklisttoken.model")

const captianRegister = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).send({ errors: error.array() });
  }

  const { fullname, email, password, vechile } = req.body;

  const isCaptianAlreadyExist = await captianModel.findOne({ email });

  if (isCaptianAlreadyExist) {
    return res.status(400).json({ message: "Captian Already Exists" });
  }

  const hashedPassword = await captianModel.hashedPassword(password);

  const captian = await captianService.createCaptian({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vechile.color,
    plate: vechile.plate,
    capacity: vechile.capacity,
    vechileType: vechile.vechileType,
  });

  const token = captian.generateAuthToken();

  res.status(201).json({ token, captian, message: "User created" });
};

const captianLogin = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { email, password } = req.body;

  const captian = await captianModel.findOne({ email }).select("+password");

  if (!captian) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const isMatch = await captian.comparePassword(password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const token = captian.generateAuthToken();

  res.cookie("token", token);

  res.status(200).json({ token, captian });
};


const getCaptianProfile = async (req, res) => {
  res.status(200).json(req.captian);
};


const logoutCaptian = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await BlacklistTokenModel.create({ token });

  res.status(200).json({ message: "Captian Logged out" });
};

module.exports = {
  captianRegister,
  captianLogin,
  getCaptianProfile,
  logoutCaptian
};
