import { NextApiRequest, NextApiResponse } from 'next';
import { createCanvas } from 'canvas';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { initials } = req.query;
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext('2d');

  // Fondo
  ctx.fillStyle = '#3498db';
  ctx.fillRect(0, 0, 200, 200);

  // Texto
  ctx.font = 'bold 80px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(initials as string, 100, 100);

  // Enviar la imagen
  res.setHeader('Content-Type', 'image/png');
  res.send(canvas.toBuffer());
}