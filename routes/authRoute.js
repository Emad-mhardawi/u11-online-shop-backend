const express = require('express');

const router = express.Router();

const authController = require('../controllers/authentication');

router.post('/register', authController.postSignup );
router.post('/login', authController.postLogin)


module.exports = router;