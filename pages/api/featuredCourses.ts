import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../src/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase();
      const courses = await db.collection('courses').find({}).limit(6).toArray();
      
      const formattedCourses = courses.map(course => ({
        ...course,
        _id: (course._id as ObjectId).toString()
      }));

      res.status(200).json(formattedCourses);
    } catch (error) {
      console.error('Error fetching featured courses:', error);
      res.status(500).json({ error: 'Error fetching featured courses' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}