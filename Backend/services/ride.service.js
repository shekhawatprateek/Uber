const rideModel = require('../models/ride.model');
const mapsService = require('./maps.service');
const crypto = require('crypto')

function generateOtp(num){
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();

    return otp;
}

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('pickup and destination are required');
    }

    try {
        const distanceTime = await mapsService.getDistanceTime(pickup, destination);

        const distanceInKm = distanceTime.distance.value / 1000;
        const durationInMin = distanceTime.duration.value / 60;

        const rates = {
            auto: { base: 30, perKm: 10, perMin: 2 },
            car: { base: 50, perKm: 15, perMin: 3 },
            motorcycle: { base: 20, perKm: 8, perMin: 1.5 }
        };

        const fare = {};

        for (let type in rates) {
            const r = rates[type];
            fare[type] = Math.round(
                r.base +
                (distanceInKm * r.perKm) +
                (durationInMin * r.perMin)
            );
        }

        return fare;

    } catch (err) {
        console.error("Error calculating fare:", err);
        throw new Error("Fare calculation failed");
    }
}
async function createRide({user, pickup, destination, vehicleType}){
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error("All fields are required")
    }

    const fare = await getFare(pickup, destination) ;

    const ride = rideModel.create({
        user, pickup, destination, otp: generateOtp(6),fare: fare[vehicleType]
    })

    return ride;

}

module.exports = {
    createRide,
    getFare
}
