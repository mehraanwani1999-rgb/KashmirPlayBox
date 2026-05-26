import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative px-4 pb-6 pt-4 sm:px-6 sm:pb-8 lg:pb-10">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[36px]">
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
              alt="Contact Us"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
          </div>

          <div className="relative grid min-h-[52svh] items-end p-4 sm:p-6 lg:min-h-[60svh] lg:p-8">
            <div className="hero-card max-w-3xl text-white">
              <p className="eyebrow text-white/70">Contact Us</p>
              <h1 className="headline-lg mt-3 text-white">Contact Us</h1>
              <div className="mt-4 space-y-2">
                <p className="text-base font-medium text-white/88 sm:text-lg">
                  Come for the game.
                </p>
                <p className="text-base font-medium text-white/88 sm:text-lg">
                  Stay for the good times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}