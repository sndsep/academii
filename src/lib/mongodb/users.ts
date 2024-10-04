import { connectToDatabase } from './mongodb';

export async function createUser(userData: any) {
  const db = await connectToDatabase();
  return db.collection('users').insertOne(userData);
}

export async function findUserByEmail(email: string) {
  const db = await connectToDatabase();
  return db.collection('users').findOne({ email });
}
