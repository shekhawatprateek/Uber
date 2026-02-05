const express = require('express');
const {body} = require('express-validator');
const captianController = require('../controllers/captian.controller')
const authMiddleware = require('../middleware/auth.middleware')


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

router.post('/login',[
   body('email').isEmail().withMessage('Invalid Email'),
   body('password').isLength({min: 6}).withMessage('Password must be atleast 6 characters long')
 ], captianController.captianLogin)

 router.get('/profile', authMiddleware.authCaptian, captianController.getCaptianProfile);

 router.get('/logout', authMiddleware.authCaptian, captianController.logoutCaptian);

module.exports = router;