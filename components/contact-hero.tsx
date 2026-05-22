import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative pt-16">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/turf-hero.jpg"
          alt="PlayBox Kashmir turf at night"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
              Come for the game.
              <br />
              Stay for the good times.
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
