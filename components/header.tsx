"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6">
        <div className="shell">
          <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                P
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-[-0.02em] text-foreground">
                  PlayBox Kashmir
                </p>
                <p className="text-xs text-foreground/55">Multi-Sports Turf</p>
              </div>
            </Link>

            {/* Desktop Navigation with Glass Background for Links */}
            <nav className="hidden items-center gap-2 md:flex">
              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md dark:bg-black/20">
                <Link
                  href="/"
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/72 transition-colors hover:bg-white/10 hover:text-foreground dark:hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/72 transition-colors hover:bg-white/10 hover:text-foreground dark:hover:bg-white/10"
                >
                  Contact
                </Link>
              </div>
              <Link href="/contact" className="btn-primary ml-4">
                Get in Touch
              </Link>
            </nav>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-foreground md:hidden dark:border-white/10 dark:bg-white/5"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu with Glass Styling for Links */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 md:hidden">
          <div className="glass-strong shell rounded-[28px] p-4 border border-white/10 shadow-lg">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl border border-transparent bg-white/5 px-4 py-3.5 text-sm font-medium text-foreground/80 backdrop-blur-md transition-colors hover:border-white/10 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                Home
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl border border-transparent bg-white/5 px-4 py-3.5 text-sm font-medium text-foreground/80 backdrop-blur-md transition-colors hover:border-white/10 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-2 flex justify-center py-4"
              >
                Get in Touch
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}