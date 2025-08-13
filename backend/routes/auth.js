const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const { z } = require('zod');

// Zod schemas
const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  empID: z.string().min(1, "Employee ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

// Signup route
router.post('/signup', async (req, res) => {
  try {
    // Validate input
    const { name, email, empID, password } = signupSchema.parse(req.body);

    const existing = await Employee.findOne({ email });
    if (existing) return res.status(400).json({ msg: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    await Employee.create({ name, email, empID, password: hashed });

    res.status(201).json({ msg: "Signup successful" });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ msg: err.issues.map(e => e.message) });
    }
    res.status(500).json({ msg: "Signup failed", error: err.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    // Validate input
    const { email, password } = loginSchema.parse(req.body);

    const user = await Employee.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token, name: user.name, empID: user.empID });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ msg: err.issues.map(e => e.message) });
    }
    res.status(500).json({ msg: "Login failed", error: err.message });
  }
});

module.exports = router;