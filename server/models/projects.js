const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  clientId: String,
  requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Request' }]
});

module.exports = mongoose.model('Project', projectSchema);
