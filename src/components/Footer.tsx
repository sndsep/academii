import React from 'react'

export function Footer() {
  return (
    <footer className="bg-background py-6 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">© 2023 VFX Academy. All rights reserved.</p>
          </div>
          <nav className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:underline">Terms of Service</a>
            <a href="#" className="text-sm text-muted-foreground hover:underline">Cookie Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}