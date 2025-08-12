import { motion } from 'framer-motion';
import QuestionCard from '../components/QuestionCard';

export default function TestQuestions({ questions, answers, onSelect, onAutoSelect, onSubmit }) {
  return (
    <>
      <h2 className="text-3xl font-bold">Assessment Questions</h2>
      <div className="grid gap-6">
        {questions.map((q, i) => (
          <motion.div
            key={q._id || i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <QuestionCard
              question={q}
              index={i}
              onSelect={onSelect}
              selectedOption={answers[i]}
            />
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAutoSelect}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-xl transition"
        >
          Auto Select
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSubmit}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow transition"
        >
          Submit Test
        </motion.button>
      </div>
    </>
  );
}