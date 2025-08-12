import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">40-MCQs Test App</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-12">
          Practice. Track. Succeed. Your quick assessment hub.
        </p>
        <div className="flex justify-center gap-6">
          <Link to="/login">
            <button className="px-8 py-3 text-lg font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-8 py-3 text-lg font-semibold rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Signup
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Landing;