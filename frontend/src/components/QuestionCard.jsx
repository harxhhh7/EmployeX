import { motion } from "framer-motion";

function QuestionCard({ question, index, onSelect, selectedOption }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-200"
    >
      {/* Question */}
      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-5 leading-snug">
        <span className="text-blue-600 font-bold">{index + 1}.</span> {question.question}
      </h4>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((opt, i) => (
          <label
            key={i}
            className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
              selectedOption === opt.marks
                ? "bg-blue-50 border-blue-500 shadow-sm"
                : "border-gray-300 hover:bg-gray-50"
            }`}
          >
            <input
              type="radio"
              name={`question-${index}`}
              value={opt.marks}
              checked={selectedOption === opt.marks}
              onChange={() => onSelect(index, opt.marks)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 flex-shrink-0 rounded-full border flex items-center justify-center mr-3 transition-colors duration-200 ${
                selectedOption === opt.marks
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-400 bg-white"
              }`}
            >
              {selectedOption === opt.marks && (
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
              )}
            </span>
            <span className="text-gray-800 text-sm sm:text-base">{opt.text}</span>
          </label>
        ))}
      </div>
    </motion.div>
  );
}

export default QuestionCard;