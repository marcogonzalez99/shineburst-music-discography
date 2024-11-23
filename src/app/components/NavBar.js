import React from 'react';

export default function NavBar() {
  return (
    <div className="flex justify-end items-center p-4 bg-gray-900 text-white">
      <div className="flex space-x-4">
        <a href="#" className="hover:underline">Singles</a>
        <a href="#" className="hover:underline">Albums</a>
        <a href="#" className="hover:underline">Browse</a>
        <a href="#" className="hover:underline">My Favorites</a>
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
          <span className="text-sm">👤</span>
        </div>
      </div>
    </div>
  );
}
