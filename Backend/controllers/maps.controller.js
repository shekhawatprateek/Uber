const mapService = require("../services/maps.service");
const { validationResult } = require("express-validator");

async function getCoordinates(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { address } = req.query;
  try {
    const coordinates = await mapService.getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (e) {
    console.log(e);

    res.status(404).json({ message: "Coordinate not found" });
  }
}

async function getDistanceTime(req, res, next) {
  const errors = validationResult(req.query);

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { origin, destination } = req.query;
  try {
    const data = await mapService.getDistanceTime(origin, destination);
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: "distance and time not found" });
  }
}

async function getAutoCompleteSuggestions(req, res, next) {
  const errors = validationResult(req.query);

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  const { input } = req.query;
  try {
    const data = await mapService.getAutoCompleteSuggestions(input);
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: "distance and time not found" });
  }
}

module.exports = {
  getCoordinates,
  getDistanceTime,
  getAutoCompleteSuggestions,
};
