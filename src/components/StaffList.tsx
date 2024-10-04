import React, { useState, useEffect } from 'react';
import StaffCard from './StaffCard';

interface StaffMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const StaffList: React.FC = () => {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStaffMembers = async () => {
      try {
        const response = await fetch('/api/staff');
        if (!response.ok) {
          throw new Error('Failed to fetch staff members');
        }
        const data: StaffMember[] = await response.json();
        setStaffMembers(data);
      } catch (error) {
        console.error('Error fetching staff members:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaffMembers();
  }, []);

  if (isLoading) {
    return <div>Cargando personal...</div>;
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffList;