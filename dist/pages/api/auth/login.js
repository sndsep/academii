import { connectToDatabase } from '../../../lib/mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }
    try {
        const { email, password } = req.body;
        console.log('Email recibido:', email);
        const { db } = await connectToDatabase();
        const user = await db.collection('users').findOne({ email });
        console.log('Usuario encontrado:', user);
        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        if (!user.isAdmin) {
            return res.status(403).json({ message: 'Acceso denegado. Se requieren permisos de administrador.' });
        }
        const token = jwt.sign({ userId: user._id, email: user.email, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, user: { email: user.email, isAdmin: user.isAdmin } });
    }
    catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}
