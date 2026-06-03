export function SportsSection() {
  const sports = ["Football", "Cricket", "Pickleball", "Cricket Nets"]

  return (
    <section id="sports" className="px-4 py-8 sm:px-6 lg:py-10">
      <div className="shell">
        <div className="overflow-hidden rounded-[36px] border border-emerald-400/10 bg-emerald-950/20 p-8 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]">

          {/* <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-white/45">
            SPORTS
          </p> */}

          <h2 className="mb-8 text-5xl font-semibold tracking-[-0.05em] text-white">
            Sports
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {sports.map((sport) => (
              <div
                key={sport}
                className="
                  rounded-[28px]
                  border border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/10
                  hover:-translate-y-1
                "
              >
                <p className="text-lg font-semibold text-white">
                  {sport}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}