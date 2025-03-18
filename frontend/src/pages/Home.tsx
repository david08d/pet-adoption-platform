import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface FeaturedPet {
  id: string;
  name: string;
  type: string;
  breed: string;
  imageUrl: string;
}

interface Shelter {
  id: string;
  name: string;
  currentPets: number;
  capacity: number;
}

const Home: React.FC = () => {
  const { data: featuredPets } = useQuery<FeaturedPet[]>({
    queryKey: ['featuredPets'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/pets/featured');
      return response.data;
    }
  });

  const { data: shelters } = useQuery<Shelter[]>({
    queryKey: ['shelters'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/shelters');
      return response.data;
    }
  });

  const totalPets = shelters?.reduce((acc, shelter) => acc + shelter.currentPets, 0) || 0;
  const totalCapacity = shelters?.reduce((acc, shelter) => acc + shelter.capacity, 0) || 0;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Find Your Perfect Companion
            </h1>
            <p className="text-xl mb-8">
              Give a loving home to a pet in need. Browse through our selection of
              adorable pets waiting for their forever families.
            </p>
            <Link
              to="/pets"
              className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-purple-50 transition-colors"
            >
              Browse Pets
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {totalPets}
            </div>
            <div className="text-gray-600">Pets Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {shelters?.length || 0}
            </div>
            <div className="text-gray-600">Partner Shelters</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {Math.round((totalPets / totalCapacity) * 100)}%
            </div>
            <div className="text-gray-600">Shelter Occupancy</div>
          </div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Pets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPets?.map((pet) => (
            <div
              key={pet.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={pet.imageUrl}
                alt={pet.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {pet.name}
                </h3>
                <p className="text-gray-600">
                  {pet.breed} • {pet.type}
                </p>
                <Link
                  to={`/pets/${pet.id}`}
                  className="mt-4 inline-block text-purple-600 hover:text-purple-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to adopt a pet or support our cause through
            donations, we're here to help you make a positive impact.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/donations"
              className="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              to="/shelters"
              className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-purple-50 transition-colors"
            >
              Find a Shelter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 