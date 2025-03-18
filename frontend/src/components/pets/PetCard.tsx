import React from 'react';
import { Link } from 'react-router-dom';
import { Pet } from '../../store/slices/petsSlice';

interface PetCardProps {
  pet: Pet;
}

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        {pet.images && pet.images.length > 0 ? (
          <img
            src={pet.images[0]}
            alt={pet.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Немає фото</span>
          </div>
        )}
        {pet.isAdopted && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
            Взято під опіку
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{pet.name}</h3>
        <div className="space-y-1 text-gray-600">
          <p><span className="font-medium">Тип:</span> {pet.type}</p>
          <p><span className="font-medium">Порода:</span> {pet.breed}</p>
          <p><span className="font-medium">Вік:</span> {pet.age} років</p>
        </div>
        <p className="mt-3 text-gray-700 line-clamp-2">{pet.description}</p>
        <div className="mt-4">
          <Link
            to={`/pets/${pet._id}`}
            className="block w-full text-center bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300"
          >
            Детальніше
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard; 