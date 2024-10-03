import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../src/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase();
      const teachers = await db.collection('teachers').find({}).toArray();
      res.status(200).json(teachers);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los profesores' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}