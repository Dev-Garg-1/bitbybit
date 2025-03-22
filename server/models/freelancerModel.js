const mongoose  = require("mongoose");

const freelancerSchema = mongoose.Schema({
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  expertise: { type: String, required: true },
  rating: { type: Number, default: 0 },
  skills: [{ type: String }]
});

module.exports = mongoose.model("freelancer", freelancerSchema);