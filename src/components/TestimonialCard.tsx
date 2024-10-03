import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  title: string;
  text: string;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, text, imageUrl = '/placeholder.svg' }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400" size={20} />
          ))}
        </div>
        <p className="text-gray-600 mb-4 flex-grow">"{text}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 relative mr-4">
            <Image
              src={imageUrl}
              alt={name}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-gray-600 text-sm">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;