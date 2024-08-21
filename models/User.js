const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  carMake: { type: String, required: true },
  age: { type: Number, required: true },
  pet: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
