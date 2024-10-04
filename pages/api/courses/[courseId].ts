import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../src/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { courseId } = req.query;
      console.log('Buscando curso con ID:', courseId);

      const { db } = await connectToDatabase();
      const course = await db.collection('courses').findOne({ _id: new ObjectId(courseId as string) });

      if (!course) {
        console.log('Curso no encontrado');
        return res.status(404).json({ error: 'Course not found' });
      }

      console.log('Course found:', course);
      res.status(200).json(course);
    } catch (error) {
      console.error('Error fetching course:', error);
      res.status(500).json({ error: 'Unable to fetch course', details: error instanceof Error ? error.message : 'Unknown error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}