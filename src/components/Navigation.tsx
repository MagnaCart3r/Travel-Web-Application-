import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Plane, Search, User, Menu as MenuIcon } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">Carter Travel</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/destinations" className="text-gray-700 hover:text-primary-600">
              Destinations
            </Link>
            <Link to="/flights" className="text-gray-700 hover:text-primary-600">
              Flights
            </Link>
            <Link to="/hotels" className="text-gray-700 hover:text-primary-600">
              Hotels
            </Link>
            <Link to="/tours" className="text-gray-700 hover:text-primary-600">
              Tours
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-primary-50">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            
            <Menu as="div" className="relative">
              <Menu.Button className="p-2 rounded-full hover:bg-primary-50">
                <User className="h-5 w-5 text-gray-600" />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/profile"
                      className={`${
                        active ? 'bg-primary-50' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Profile
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/bookings"
                      className={`${
                        active ? 'bg-primary-50' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      My Bookings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-primary-50' : ''
                      } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                    >
                      Sign Out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}