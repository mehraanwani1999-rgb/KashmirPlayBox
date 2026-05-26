export function SportsSection() {
  const sports = ["Football", "Cricket", "Pickleball", "Cricket Nets"]

  return (
    <section id="sports" className="px-4 py-6 sm:px-6 lg:py-8">
      <div className="shell">
        <div className="section-card">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Sports</p>
              <h2 className="headline-lg mt-3">Sports</h2>
            </div>
          </div>

          <div className="grid-auto sm:grid-cols-2 xl:grid-cols-4">
            {sports.map((sport) => (
              <div
                key={sport}
                className="rounded-[24px] border border-black/8 bg-white/55 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6"
              >
                <p className="text-lg font-semibold tracking-[-0.03em] text-foreground">{sport}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}