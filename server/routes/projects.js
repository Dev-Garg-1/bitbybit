const express = require('express');
const router = express.Router();
const Project = require('../models/projects');

// Create a project
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    // Emit real-time notification to freelancers
    req.app.get('socketio').emit('newProject', project);

    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;
