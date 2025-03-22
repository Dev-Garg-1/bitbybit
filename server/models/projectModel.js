const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  clientId: String,

  milestones: [{
    description: String,
    amount: Number,
    id: Number,
    isCompleted: {
      type: Boolean,
      default: false
    }
  }]

});

module.exports = mongoose.model('Project', projectSchema);