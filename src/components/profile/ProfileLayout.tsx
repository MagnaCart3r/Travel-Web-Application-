import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileSidebar from './ProfileSidebar';

export default function ProfileLayout() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <ProfileSidebar />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}