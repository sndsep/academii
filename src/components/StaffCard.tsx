import React from 'react';
import Image from 'next/image';

interface StaffMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

interface StaffCardProps {
  staff: StaffMember;
}

const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={staff.image}
        alt={staff.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{staff.name}</h3>
        <p className="text-gray-600">{staff.role}</p>
      </div>
    </div>
  );
};

export default StaffCard;