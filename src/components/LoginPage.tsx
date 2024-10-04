'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import AuthWrapper from './AuthWrapper';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('Datos de inicio de sesión:', { email, password });
    e.preventDefault();
    setError('');
    try {
      console.log('Intentando iniciar sesión con:', { email, password });
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log('Respuesta del servidor:', response.status);
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role);
        console.log('Inicio de sesión exitoso:', data);
        router.push(data.user.role === 'admin' ? '/backoffice' : '/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Error en el inicio de sesión:', errorData);
        setError(errorData.message || 'Error en el inicio de sesión');
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      setError('Error al intentar iniciar sesión');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '24rem', width: '100%' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Iniciar Sesión</h1>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">Correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="m@ejemplo.com"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
            Iniciar Sesión
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          ¿No tienes una cuenta?{" "}
          <Link href="/registro" className="text-blue-500 underline">
            Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;