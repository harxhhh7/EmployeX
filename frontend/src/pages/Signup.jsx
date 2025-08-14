import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Signup() {
  const [name, setName] = useState('');
  const [empID, setEmpID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
        name,
        empID,
        email,
        password
      });

      alert('Signup successful! Please login.');
      navigate('/login');
    } catch (err) {
      alert('Signup failed: ' + (err.response?.data?.msg || err.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Your Account
        </h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Employee ID"
            value={empID}
            onChange={(e) => setEmpID(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Signup
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{' '}
          <span
            className="text-blue-600 font-medium cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Login here
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export default Signup;