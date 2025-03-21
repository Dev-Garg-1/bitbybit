const express = require('express');
const router = express.Router();
const Request = require("../models/request")
const Project = require('../models/projects');

// Freelancer requests a project
router.post('/', async (req, res) => {
  try {
    const { freelancerId, projectId } = req.body;

    const request = new Request({ freelancerId, projectId });
    await request.save();

    // Send request to the client in real-time
    req.app.get('socketio').emit('newRequest', request);

    res.status(201).json(request);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
