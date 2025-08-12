import { motion } from 'framer-motion';
import CategoryChart from '../components/CategoryChart';

export default function DashboardHeader({ name, empID, bestScore, chartData, onStartTest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800">Hello, {name}</h1>
          <p className="text-gray-500 text-sm mt-1">Employee ID: {empID}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStartTest}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl text-lg shadow-lg transition"
        >
          Start Test
        </motion.button>
      </div>

      {bestScore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-md bg-white/70 shadow-xl rounded-2xl p-6 grid grid-cols-2 gap-8"
        >
          <div>
            <p className="text-gray-500 text-sm">Best Score</p>
            <p className="text-3xl font-bold text-blue-600">{bestScore.score}/{bestScore.totalMarks}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Best Percentage</p>
            <p className="text-3xl font-bold text-green-600">{bestScore.percentage}%</p>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white shadow-xl rounded-2xl p-6"
      >
        <h2 className="text-2xl font-bold mb-4">Category Distribution</h2>
        <CategoryChart data={chartData} />
      </motion.div>
    </motion.div>
  );
}