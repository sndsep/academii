import jwt from 'jsonwebtoken';
export default function handler(req, res) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No se proporcionó token de autenticación' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ isValid: true, user: decoded });
    }
    catch (error) {
        res.status(401).json({ message: 'Token inválido o expirado' });
    }
}
