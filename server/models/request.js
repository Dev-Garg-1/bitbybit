const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  freelancerId: String,
  projectId: String,
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
});

module.exports = mongoose.model('Request', requestSchema);
