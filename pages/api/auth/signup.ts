import { NextApiRequest, NextApiResponse } from 'next';
import { createUser, findUserByEmail } from '@/lib/mongodb';
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { email, password, name } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser !== null) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await createUser({ email, password: hashedPassword, name, role: 'student' });

    res.status(201).json({ message: 'Usuario creado exitosamente', userId });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
}