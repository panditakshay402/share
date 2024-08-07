const express = require('express');
const { registerController,loginController } = require('../controllers/userControllers');

// router obj
const router = express.Router();

// route
router.post('/register',registerController);
router.post('/login',loginController);

// 
module.exports = router;