import Link from "next/link"

export function AboutSection() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:py-10">
      <div className="shell">
        <div className="overflow-hidden rounded-[36px] border border-emerald-400/10 bg-emerald-950/20 p-8 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]">

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            <div>
              {/* <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-white/45">
                ABOUT US
              </p> */}

              <h2 className="text-5xl font-semibold tracking-[-0.05em] text-white">
                About Us
              </h2>
              <p className="mt-5 max-w-sm text-xl font-medium leading-relaxed tracking-[-0.03em] text-emerald-100/90 lg:text-2xl">
                Kashmir has always had the passion.
                <br />
                Now it has the pitch.
              </p>
            </div>

            <div>
              <p className="max-w-2xl text-lg leading-8 text-white/75">
                PlayBox Kashmir is Srinagar’s first dedicated multi-sport recreational facility
                 — built for those who take their game seriously, and those who just want to have fun.
                  With premium synthetic turf, professional pickleball courts, and batting nets,
                   we’ve created a space where sport meets excellence.
                
              </p>
                <p className="max-w-2xl text-lg leading-8 text-white/75">
                We’re here for every game, every player, every day.
                </p>
              <Link
                href="/contact"
                className="
                  mt-8 inline-flex
                  items-center
                  rounded-full
                  border border-white/10
                  bg-white/5
                  px-6 py-3
                  text-sm font-medium
                  text-white
                  backdrop-blur-xl
                  transition
                  hover:bg-white/10
                "
              >
                Get in Touch →
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}