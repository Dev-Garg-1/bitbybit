const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true }, // name of the user
    email: { type: String, required: true, unique: true }, // email of the user
    password: { type: String, required: true }, // password of the user
    role: {type: String, default: "client"}
});

const User = mongoose.model('User', userSchema);

module.exports = User;