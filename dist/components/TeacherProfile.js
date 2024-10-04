import React from 'react';
import Image from 'next/image';
export default function TeacherProfile({ teacher }) {
    const initials = teacher.name.split(' ').map(n => n[0]).join('').toUpperCase();
    const avatarSrc = teacher.avatar || `/api/avatar?initials=${encodeURIComponent(initials)}`;
    return (<div className="border-t pt-4 mt-4">
      <h4 className="font-bold text-lg mb-4">Instructor</h4>
      <div className="flex items-center bg-gray-50 p-4 rounded-lg">
        <div className="relative w-16 h-16 mr-4 rounded-full overflow-hidden">
          <Image src={avatarSrc} alt={teacher.name} fill className="object-cover"/>
        </div>
        <div className="flex-grow">
          <p className="font-semibold text-lg">{teacher.name}</p>
          <p className="text-sm text-gray-600 mb-2">{teacher.title}</p>
          <p className="text-sm text-gray-700 line-clamp-2">{teacher.bio}</p>
        </div>
      </div>
    </div>);
}
