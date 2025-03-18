import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            Pet Adoption
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/pets" className="text-gray-600 hover:text-purple-600">
              Тварини
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="text-gray-600 hover:text-purple-600">
                  Профіль
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-purple-600"
                >
                  Вийти
                </button>
              </>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-purple-600">
                Увійти
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 