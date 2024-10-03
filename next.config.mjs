/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Agrega aquí los dominios externos si los necesitas
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};

export default nextConfig;