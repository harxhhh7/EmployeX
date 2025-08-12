import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

import DashboardHeader from '../subComponents/DashboardHeader';
import TestQuestions from '../subComponents/TestQuestions';
import TestResultsSection from '../subComponents/TestResultsSection';

const getCategory = (score) => {
  if (score <= 98) return 'Bad';
  if (score <= 99) return 'Below Average';
  if (score <= 100) return 'Average';
  if (score <= 105) return 'Good';
  return 'Excellent';
};

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');
  const empID = localStorage.getItem('empID');

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [testStarted, setTestStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState('');
  const [chartData, setChartData] = useState([]);
  const [bestScore, setBestScore] = useState(null);

  useEffect(() => {
    if (!token) navigate('/signup');
  }, [token, navigate]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/test/category-distribution', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setChartData(res.data))
      .catch(err => console.log('Chart error:', err));
  }, [token]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/test/history', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => {
      if (res.data.length > 0) {
        const best = res.data.reduce((max, test) => test.score > max.score ? test : max, res.data[0]);
        setBestScore({
          score: best.score,
          totalMarks: best.totalMarks || 160,
          percentage: ((best.score / (best.totalMarks || 160)) * 100).toFixed(2)
        });
      }
    }).catch(err => console.error('Error fetching test history:', err));
  }, [token]);

  const handleStartTest = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/test/questions', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQuestions(res.data);
      setAnswers(Array(res.data.length).fill(null));
      setTestStarted(true);
    } catch (err) {
      alert('Unable to fetch questions. Please try again later.');
    }
  };

  const handleSelect = (index, marks) => {
    const updated = [...answers];
    updated[index] = marks;
    setAnswers(updated);
  };

  const handleGoToDashboard = () => {
    setTestStarted(false);
    setSubmitted(false);

    // re-fetch chart data so it's updated
    axios.get('http://localhost:5000/api/test/category-distribution', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(res => setChartData(res.data))
    .catch(err => console.log('Chart error:', err));
  };

  const handleAutoSelect = () => {
    setAnswers(questions.map(q => {
      const randomIndex = Math.floor(Math.random() * q.options.length);
      return q.options[randomIndex].marks;
    }));
  };

  const handleSubmit = async () => {
    if (answers.includes(null)) return alert('Please answer all questions');

    const total = answers.reduce((acc, val) => acc + Number(val), 0);
    const cat = getCategory(total);
    setScore(total);
    setCategory(cat);
    setSubmitted(true);

    try {
      await axios.post('http://localhost:5000/api/test/submit', { score: total, category: cat }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const res = await axios.get('http://localhost:5000/api/test/category-distribution', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setChartData(res.data);
    } catch (err) {
      console.error('Error submitting result:', err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      {!testStarted ? (
        <DashboardHeader
          name={name}
          empID={empID}
          bestScore={bestScore}
          chartData={chartData}
          onStartTest={handleStartTest}
        />
      ) : !submitted ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
          <TestQuestions
            questions={questions}
            answers={answers}
            onSelect={handleSelect}
            onAutoSelect={handleAutoSelect}
            onSubmit={handleSubmit}
          />
        </motion.div>
      ) : (
        <TestResultsSection
          score={score}
          category={category}
          name={name}
          empID={empID}
          chartData={chartData}
          onDashboard={handleGoToDashboard}
        />
      )}
    </div>
  );
}

export default Dashboard;