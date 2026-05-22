import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60 mb-6">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-8">
              Come for the game.
              <br />
              Stay for the good times.
            </h2>
          </div>
          <div>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Playbox is your go-to multi-sport turf facility — a place where friends gather, 
              families bond, and everyone gets to have a great time. No pressure, no leagues, 
              just pure fun on premium turf courts built for every sport you love.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-medium text-primary-foreground border-b border-primary-foreground/30 pb-1 hover:border-primary-foreground transition-colors"
            >
              Get in touch
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
