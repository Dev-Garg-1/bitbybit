const express = require('express');
const router = express.Router();
const { registerUser , loginUser , logoutUser , getUserProfile, getFreelancers, postProject, getProjects} = require('../controllers/authController');
const { protect } = require('../middlewares/protect');

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", getUserProfile);
router.get("/getFreelancers", getFreelancers);
router.post("/postProject", postProject);
router.get("/getProjects/:projectId", getProjects);

module.exports = router;