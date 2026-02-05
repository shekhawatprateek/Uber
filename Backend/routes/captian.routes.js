const express = require('express');
const {body} = require('express-validator');
const captianController = require('../controllers/captian.controller')


const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be atleast 3 characters long'),
     body('password').isLength({min: 3}).withMessage('Password must be atleast 3 characters long'),
     body('vechile.color').isLength({min: 3}).withMessage('Color must be atleast 3 characters long'),
     body('vechile.capacity').isLength({min: 1}).withMessage('Capacity must be atleast 1'),
     body('vechile.plate').isLength({min: 3}).withMessage('Plate must be atleast 3 characters long'),
     body('vechile.vechileType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vechile type')
], captianController.captianRegister)

module.exports = router;