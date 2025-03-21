const express = require('express');
const router = express.Router();
const { registerUser , loginUser , logoutUser , getUserProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/protect');

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);


module.exports = router;