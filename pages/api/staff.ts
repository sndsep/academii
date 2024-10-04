import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../src/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase();
      const staffMembers = await db
        .collection('users')
        .find({ role: 'staff' })
        .project({ _id: 1, name: 1, role: 1, image: 1 })
        .toArray();

      const formattedStaffMembers = staffMembers.map((member) => ({
        id: member._id.toString(),
        name: member.name,
        role: member.role,
        image: member.image || '/placeholder-staff-image.jpg',
      }));

      res.status(200).json(formattedStaffMembers);
    } catch (error) {
      console.error('Error fetching staff members:', error);
      res.status(500).json({ error: 'Error al obtener los miembros del personal' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}