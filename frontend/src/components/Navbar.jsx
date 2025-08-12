import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const showNavbar = location.pathname === '/dashboard';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
    window.location.reload();
  };

  if (!showNavbar) return null;

  return (
    <header className="bg-white border-b shadow-sm h-16 flex items-center justify-between px-8">
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-gray-800">Employee Portal</span>
        <span className="text-xs text-gray-500 tracking-wide">| Dashboard</span>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-200"
      >
        Logout
      </button>
    </header>
  );
}

export default Navbar;