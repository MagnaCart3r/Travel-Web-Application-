import React from 'react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Lagos, Nigeria',
    image: 'https://www.blackpast.org/wp-content/uploads/Tinubu_Square_Lagos_Nigeria_August_2014.jpg',
    price: 799,
    rating: 4.5
  },
  {
    id: 2,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    price: 1299,
    rating: 4.9
  },
  {
    id: 3,
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80',
    price: 1599,
    rating: 4.7
  },
  {
    id: 4,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
    price: 899,
    rating: 4.8
  },
  {
    id: 5,
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    price: 1899,
    rating: 4.9
  },
  {
    id: 6,
    name: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80',
    price: 1499,
    rating: 4.8
  },
  {
    id: 7,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    price: 1699,
    rating: 4.7
  },
  {
    id: 8,
    name: 'Amalfi Coast, Italy',
    image: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80',
    price: 1599,
    rating: 4.8
  },
  {
    id: 9,
    name: 'Cape Town, South Africa',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80',
    price: 999,
    rating: 4.6
  }
];

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
          <button className="flex items-center text-primary-600 hover:text-primary-700">
            View all <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  ★ {destination.rating}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {destination.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">
                    From <span className="text-2xl font-bold text-gray-900">${destination.price}</span>
                  </p>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}