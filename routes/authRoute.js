const express = require('express');

const router = express.Router();

const authController = require('../controllers/authentication');
const isAuth = require('../middlewares/auth');

router.post('/register', authController.postSignup );
router.post('/login', isAuth, authController.postLogin)


module.exports = router;