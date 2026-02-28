const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");

async function createRide(req, res) {
  const errors = validationResult(req.body);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const {pickup, destination, vehicleType} = req.body;

  try {
    const ride = await rideService.createRide({user: req.user._id, pickup, destination, vehicleType});

    res.status(201).json({ride, message: "ride created"})
  } catch (e) {
    res.status(400).json({ message: errors.message });
  }
}

module.exports = {
  createRide,
};
