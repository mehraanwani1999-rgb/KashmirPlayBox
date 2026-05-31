import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative px-4 pb-6 pt-4 sm:px-6 sm:pb-8 lg:pb-10">
      <div className="shell">
        <div className="relative isolate overflow-hidden rounded-[36px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
          <div className="absolute inset-0">
            {/* Mobile image */}
            <Image
              src="/images/mobile-turf-hero.png"
              alt="Multi-Sport Turf Facility"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-[1.05] sm:hidden"
            />

            {/* Desktop image */}
            <Image
              src="/images/turf-hero.jpg"
              alt="Multi-Sport Turf Facility"
              fill
              priority
              sizes="100vw"
              className="hidden object-cover object-center scale-[1.03] sm:block"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/35 to-black/55" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.18),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.25))]" />
          </div>

          <div className="relative grid min-h-[78svh] items-end p-5 sm:p-7 lg:min-h-[86svh] lg:p-10">
            <div className="max-w-4xl text-white">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white/80 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
                Multi-Sport Turf Facility
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                Play your
                <br />
                best game
              </h1>

              <div className="mt-5 max-w-2xl space-y-3">
                <p className="text-lg font-medium text-white/90 sm:text-xl">
                  Football. Cricket. Pickleball. Cricket Nets.
                </p>
                <p className="text-sm leading-6 text-white/72 sm:text-base">
                  Premium turf in Srinagar, Kashmir, designed for high-energy matches, evening sessions, and unforgettable weekend games.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90"
                >
                  Get in Touch
                </Link>
                <a
                  href="#sports"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
                >
                  Explore Sports
                </a>
              </div>

              <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">4</p>
                  <p className="mt-1 text-sm text-white/70">Sports</p>
                </div>
                <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">18h</p>
                  <p className="mt-1 text-sm text-white/70">Daily Hours</p>
                </div>
                <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">100%</p>
                  <p className="mt-1 text-sm text-white/70">Floodlit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}