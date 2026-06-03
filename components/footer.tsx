import Link from "next/link"

export function Footer() {
  return (
    <footer className="px-4 py-6 sm:px-6 lg:py-8">
      <div className="shell">
        <div className="glass rounded-[28px] px-5 py-6 sm:px-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {/* <p className="text-sm font-semibold tracking-[-0.02em] text-foreground">
                PlayBox Kashmir
              </p> */}
              <p className="mt-1 text-sm text-foreground/60">All rights reserved. PlayBox Kashmir. 2026</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/65">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}