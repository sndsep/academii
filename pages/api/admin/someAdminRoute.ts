import { NextApiRequest, NextApiResponse } from 'next';
import { authMiddleware } from '@/middleware/authMiddleware';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Lógica de la ruta de administrador
}

export default authMiddleware(handler);
