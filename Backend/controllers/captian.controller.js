const captianModel = require("../models/captian.model");
const captianService = require("../services/captian.service");
const { validationResult } = require("express-validator");


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

module.exports = {
  captianRegister,
};
