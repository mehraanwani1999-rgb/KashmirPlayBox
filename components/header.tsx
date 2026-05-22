"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-semibold text-lg tracking-tight text-foreground">
            PlayBox
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link 
            href="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/contact" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://instagram.com/playboxkashmir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <Link 
              href="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://instagram.com/playboxkashmir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
