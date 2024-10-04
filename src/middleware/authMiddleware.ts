import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

interface ExtendedNextApiRequest extends NextApiRequest {
  user?: any; // Ajusta el tipo según la estructura de tu usuario
}

export function authMiddleware(handler: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'No se proporcionó token de autenticación' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string, role: string };
      
      if (decoded.role !== 'admin') {
        return res.status(403).json({ message: 'Acceso denegado. Se requieren permisos de administrador.' });
      }

      (req as ExtendedNextApiRequest).user = decoded;
      return handler(req as ExtendedNextApiRequest, res);
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido o expirado' });
    }
  };
}
