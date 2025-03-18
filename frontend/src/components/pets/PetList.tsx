import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setPets, setError } from '../../store/slices/petsSlice';
import axios from 'axios';
import PetCard from './PetCard';

const PetList: React.FC = () => {
  const dispatch = useDispatch();
  const { pets, isLoading, error } = useSelector((state: RootState) => state.pets);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pets');
        dispatch(setPets(response.data));
      } catch (error: any) {
        console.error('Error fetching pets:', error);
        dispatch(setError(error.response?.data?.message || 'Error loading pets'));
      }
    };

    fetchPets();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Спробувати ще раз
        </button>
      </div>
    );
  }

  if (!pets || pets.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">На жаль, тварин поки немає</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {pets.map((pet) => (
        <PetCard key={pet._id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList; 