import React from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-primary-900/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-6">
          Your Journey Begins Here
        </h1>
        <p className="text-xl text-white mb-8">
          Discover extraordinary destinations and create unforgettable memories
        </p>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Where to?
              </label>
              <input
                type="text"
                placeholder="Destination"
                className="input-field"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Check in
              </label>
              <input
                type="date"
                className="input-field"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Check out
              </label>
              <input
                type="date"
                className="input-field"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                &nbsp;
              </label>
              <button className="w-full bg-primary-600 text-white p-2 rounded-md hover:bg-primary-700 flex items-center justify-center">
                <Search className="h-5 w-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}