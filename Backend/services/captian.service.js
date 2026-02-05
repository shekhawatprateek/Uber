const captianModel = require("../models/captian.model");

const createCaptian = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vechileType,
}) => {
  if (
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vechileType
  ) {
    throw new Error("All fields are required");
  }

  const captian = await  captianModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vechile: {
      color,
      plate,
      capacity,
      vechileType
    },
  });

  return captian;

};

module.exports = {
  createCaptian,
};
