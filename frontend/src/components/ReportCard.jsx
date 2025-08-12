import { motion } from 'framer-motion';
import jsPDF from 'jspdf';

const ReportCard = ({ name, empID, score, category, onDashboard }) => {
  const date = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  const getSummary = () => {
    switch (category) {
      case 'Excellent':
        return {
          strength: 'Quick thinking and high accuracy',
          improvement: 'None. Maintain your level!'
        };
      case 'Good':
        return {
          strength: 'Clear concepts and good accuracy',
          improvement: 'Practice edge-case questions'
        };
      case 'Average':
        return {
          strength: 'Consistent responses across sections',
          improvement: 'Practice more situational questions'
        };
      case 'Below Average':
        return {
          strength: 'Basic understanding is visible',
          improvement: 'Work on comprehension and confidence'
        };
      default:
        return {
          strength: 'Assessment incomplete or inconsistent',
          improvement: 'Please retake the test seriously'
        };
    }
  };

  const feedback = {
    Excellent: 'Outstanding performance. Keep aiming higher!',
    Good: 'You did well. With more effort, you can reach excellence.',
    Average: 'Your performance shows potential. With a little more focus, you can move to the next level.',
    'Below Average': 'Don’t be discouraged. Consistent practice will help you improve.',
    Default: 'Assessment incomplete or inconsistent. Please retake the test seriously.'
  };

  const { strength, improvement } = getSummary();

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Employee Assessment Report', 20, 20);

    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 40);
    doc.text(`Employee ID: ${empID}`, 20, 50);
    doc.text(`Date: ${date}`, 20, 60);
    doc.text(`Score: ${score} / 160`, 20, 70);
    doc.text(`Category: ${category}`, 20, 80);

    doc.text('Summary:', 20, 100);
    doc.text(`- Strength: ${strength}`, 25, 110);
    doc.text(`- Improvement: ${improvement}`, 25, 120);

    doc.text('Feedback:', 20, 140);
    doc.text(`"${feedback[category] || feedback['Default']}"`, 25, 150, { maxWidth: 160 });

    doc.save(`Assessment_Report_${name}.pdf`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-3xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8 border border-gray-200 font-sans"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">📄 Employee Assessment Report</h2>
      <div className="border-t border-gray-300 mb-6"></div>

      <div className="space-y-2 text-gray-700">
        <p>👤 <span className="font-semibold">Name:</span> {name}</p>
        <p>🆔 <span className="font-semibold">Employee ID:</span> {empID}</p>
        <p>📅 <span className="font-semibold">Date:</span> {date}</p>
      </div>

      <div className="border-t border-gray-300 my-6"></div>

      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Score:</span> {score} / 160</p>
        <p><span className="font-semibold">Category:</span> {category}</p>
      </div>

      <div className="border-t border-gray-300 my-6"></div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">📝 Summary</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><span className="font-semibold">Strength:</span> {strength}</li>
          <li><span className="font-semibold">Improvement:</span> {improvement}</li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">🧠 Feedback</h4>
        <p className="italic text-gray-600">"{feedback[category] || feedback['Default']}"</p>
      </div>

      <motion.div 
        className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
      >
        <button 
          onClick={onDashboard} 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </button>
        <button 
          onClick={handleDownloadPDF} 
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Download PDF
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ReportCard;