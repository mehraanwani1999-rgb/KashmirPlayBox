import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/turf-hero.jpg"
          alt="PlayBox Kashmir turf at night with Kashmiri mountains"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Main Content */}
          <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-6">
            Multi-Sport Turf Facility
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-[0.9]">
            Play your
            <br />
            best game
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-xl mb-12 leading-relaxed">
            Football. Cricket. Pickleball. Cricket Nets.
            <br />
            All on premium turf in Srinagar, Kashmir.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-sm font-medium hover:bg-white/90 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="#sports"
              className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Explore Sports
            </Link>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-12 md:gap-20 mt-20 pt-10 border-t border-white/20">
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white">4</div>
            <div className="text-sm text-white/50 mt-1">Sports</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white">18h</div>
            <div className="text-sm text-white/50 mt-1">Daily Hours</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-semibold text-white">100%</div>
            <div className="text-sm text-white/50 mt-1">Floodlit</div>
          </div>
        </div>
      </div>
    </section>
  )
}
