import { NextApiRequest, NextApiResponse } from 'next';
import { createUser, findUserByEmail } from '../../../src/lib/mongodb/users';
import bcrypt from 'bcryptjs';

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
    console.log('Contraseña hasheada:', hashedPassword);
    const userId = await createUser({
      email,
      password: hashedPassword,
      name,
      role: 'student', // Cambiado de 'user' a 'student'
      enrollment_date: { $date: new Date().toISOString() },
      courses_enrolled: [],
    });

    res.status(201).json({ message: 'Usuario creado exitosamente', userId });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario' });
  }
}