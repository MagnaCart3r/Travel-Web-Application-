import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, CreditCard, History, Settings } from 'lucide-react';

const navigation = [
  { name: 'Personal Info', href: '/profile', icon: User },
  { name: 'Payment Methods', href: '/profile/payment', icon: CreditCard },
  { name: 'Transaction History', href: '/profile/transactions', icon: History },
  { name: 'Settings', href: '/profile/settings', icon: Settings },
];

export default function ProfileSidebar() {
  return (
    <nav className="w-full md:w-64 bg-white rounded-lg shadow-sm p-4">
      <div className="space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === '/profile'}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}