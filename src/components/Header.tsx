import React, { useState } from 'react'
import { GraduationCap, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { LoginForm } from './authentication'
import { SignUpForm } from './SignUpForm'  // Asegúrate de que este archivo exista y exporte SignUpForm

export function Header() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const handleLogin = (email: string, password: string) => {
    // Aquí iría la lógica de autenticación
    console.log('Intento de inicio de sesión con:', { email, password })
    // Después de la autenticación exitosa, podrías redirigir al usuario
    // o actualizar el estado de la aplicación
  }

  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2">
            <GraduationCap />
            <span className="inline-block font-bold">VFX Academy</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#courses">Courses</a>
            <a href="#professors">Professors</a>
            <a href="#projects">Projects</a>
            <a href="#reviews">Reviews</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" onClick={() => setShowLogin(true)}>
              Login
            </Button>
            <Button size="sm" onClick={() => setShowSignUp(true)}>
              Sign Up
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through our academy's offerings.
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4">
                  <a href="#courses">Courses</a>
                  <a href="#professors">Professors</a>
                  <a href="#projects">Projects</a>
                  <a href="#reviews">Reviews</a>
                  <a href="#contact">Contact</a>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Iniciar sesión</h2>
            <LoginForm onSubmit={handleLogin} />
            <button onClick={() => setShowLogin(false)} className="mt-4 text-sm text-gray-600 hover:text-gray-800">Cerrar</button>
          </div>
        </div>
      )}
      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Registrarse</h2>
            <SignUpForm />
            <button onClick={() => setShowSignUp(false)} className="mt-4 text-sm text-gray-600 hover:text-gray-800">Cerrar</button>
          </div>
        </div>
      )}
    </header>
  )
}