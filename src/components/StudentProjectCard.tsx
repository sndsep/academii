import React from 'react';
import Image from 'next/image';

interface StudentProjectCardProps {
  title: string;
  imageUrl?: string;
}

const StudentProjectCard: React.FC<StudentProjectCardProps> = ({ title, imageUrl = '/placeholder.svg' }) => {
  return (
    <div className="relative group">
      <div className="relative w-full h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full">
          View Project
        </button>
      </div>
    </div>
  );
};

export default StudentProjectCard;