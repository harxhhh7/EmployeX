const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [
    {
      text: String,
      marks: Number
    }
  ]
});

module.exports = mongoose.model('Question', questionSchema);