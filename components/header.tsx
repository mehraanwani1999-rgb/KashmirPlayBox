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

            <nav className="hidden items-center gap-8 md:flex">
              <Link href="/" className="text-sm font-medium text-foreground/72 hover:text-foreground">
                Home
              </Link>
              <Link href="/contact" className="text-sm font-medium text-foreground/72 hover:text-foreground">
                Contact
              </Link>
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </nav>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-foreground md:hidden dark:border-white/10 dark:bg-white/8"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 md:hidden">
          <div className="glass-strong shell rounded-[28px] p-4">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-white/70 dark:hover:bg-white/8"
              >
                Home
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-white/70 dark:hover:bg-white/8"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-2"
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