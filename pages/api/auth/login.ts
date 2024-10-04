import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../src/lib/mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { email, password } = req.body;
    console.log('Intento de inicio de sesión para:', email);
    const { db } = await connectToDatabase();
    const user = await db.collection('users').findOne({ email });
    console.log('Usuario encontrado:', user ? 'Sí' : 'No');
    console.log('Datos del usuario:', user);

    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Contraseña ingresada:', password);
    console.log('Contraseña almacenada (hash):', user.password);
    console.log('Contraseña válida:', isPasswordValid ? 'Sí' : 'No');

    if (!isPasswordValid) {
      console.log('Contraseña inválida');
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { 
        userId: user._id.toString(),
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    console.log('Inicio de sesión exitoso para:', email);
    res.status(200).json({ 
      token, 
      user: { 
        email: user.email, 
        role: user.role
      } 
    });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}