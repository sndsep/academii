import React from 'react';
import Image from 'next/image';
const TeacherCard = ({ name, specialty, imageUrl = '/placeholder.svg' }) => {
    return (<div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
      <div className="relative w-full h-64">
        <Image src={imageUrl} alt={name} fill style={{ objectFit: 'cover' }}/>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-gray-600">{specialty} Specialist</p>
      </div>
    </div>);
};
export default TeacherCard;
