// uploadQuestions.js (CommonJS version)
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Question = require('./models/Question');
const questions = require('./data/questionBank');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Question.deleteMany(); // Optional: Clear existing questions
    await Question.insertMany(questions);
    console.log('✅ Question bank uploaded!');
    process.exit();
  })
  .catch((err) => {
    console.error('❌ Error uploading questions:', err);
    process.exit(1);
  });
