const express = require('express');
const Question = require('../models/Question');
const Employee = require('../models/Employee');
const Result = require('../models/Result');  
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// API: Submit Test Result
router.post('/submit', authMiddleware, async (req, res) => {
  const { score, category } = req.body;

  try {
    const result = new Result({
      userId: req.user.id,
      score,
      category
    });

    await result.save();

    res.json({ msg: 'Test submitted successfully' });
  } catch (err) {
    console.error('Error submitting test:', err);
    res.status(500).json({ error: 'Failed to submit test' });
  }
});

// API: Category Distribution Chart Data (From Results)
router.get('/category-distribution', authMiddleware, async (req, res) => {
  try {
    const result = await Result.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(result);
  } catch (err) {
    console.error('Error fetching chart data:', err);
    res.status(500).json({ error: 'Failed to fetch chart data' });
  }
});

// API: Get Random 40 Questions
router.get('/questions', authMiddleware, async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 40 } }]);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// API: Get Test History of Logged-in User
router.get('/history', authMiddleware, async (req, res) => {
  try {
    const results = await Result.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(results);
  } catch (err) {
    console.error('Error fetching test history:', err);
    res.status(500).json({ error: 'Failed to fetch test history' });
  }
});

module.exports = router;