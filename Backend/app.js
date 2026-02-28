const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const connectToDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const captianRoutes = require('./routes/captian.routes')
const mapsRoutes = require('./routes/maps.routes')
const rideRoutes  = require('./routes/ride.routes')

connectToDb();
const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

app.use('/users', userRoutes)
app.use('/captain', captianRoutes)
app.use('/maps', mapsRoutes)
app.use('/rides', rideRoutes)


app.get('/',(req, res) => {
    res.send('Hello World')
})

module.exports = app;