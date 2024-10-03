import { NextApiRequest, NextApiResponse } from 'next';
import { createCanvas } from 'canvas';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { width, height, text } = req.query;

  // Asegúrate de que width y height sean números
  const canvasWidth = parseInt(width as string) || 600;
  const canvasHeight = parseInt(height as string) || 400;

  // Crea el canvas
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');

  // Configura el fondo
  ctx.fillStyle = '#cccccc';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Configura el texto
  ctx.fillStyle = '#333333';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Dibuja el texto
  ctx.fillText(text as string || 'Placeholder', canvasWidth / 2, canvasHeight / 2);

  // Convierte el canvas a un buffer PNG
  const buffer = canvas.toBuffer('image/png');

  // Envía la imagen como respuesta
  res.setHeader('Content-Type', 'image/png');
  res.send(buffer);
}
