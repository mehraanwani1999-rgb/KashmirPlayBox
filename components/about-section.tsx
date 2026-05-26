import Link from "next/link"

export function AboutSection() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:py-8">
      <div className="shell">
        <div className="section-card">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="eyebrow">About Us</p>
              <h2 className="headline-lg mt-3">About Us</h2>
            </div>

            <div className="space-y-5">
              <p className="subcopy max-w-2xl">
                Playbox is your go-to multi-sport turf facility — a place where friends gather,
                families bond, and everyone gets to have a great time. No pressure, no leagues,
                just pure fun on premium turf courts built for every sport you love.
              </p>

              <Link href="/contact" className="inline-flex items-center text-sm font-medium text-primary">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}