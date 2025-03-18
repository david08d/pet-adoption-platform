import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Будь ласка, увійдіть в систему</h1>
          <p className="text-gray-600">Щоб переглянути свій профіль, вам потрібно авторизуватися.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Мій профіль</h1>
        
        <div className="bg-white shadow rounded-lg p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Особиста інформація</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Ім'я</label>
                <p className="mt-1 text-gray-900">{user.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-gray-900">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Телефон</label>
                <p className="mt-1 text-gray-900">{user.phone || 'Не вказано'}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Мої заявки на усиновлення</h2>
            <p className="text-gray-600">Тут буде список ваших заявок на усиновлення тварин.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Мої пожертвування</h2>
            <p className="text-gray-600">Тут буде історія ваших пожертвувань.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 