import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">VFX Academy</div>
        <div className="flex items-center">
          <div className="flex space-x-4 mr-6">
            <Link href="/courses" className="text-gray-600 hover:text-gray-800">
              Courses
            </Link>
            <Link href="/teachers" className="text-gray-600 hover:text-gray-800">
              Teachers
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-800">
              Projects
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
          </div>
          <div className="flex space-x-2">
            <Link href="/login" className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded">
              Login
            </Link>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;