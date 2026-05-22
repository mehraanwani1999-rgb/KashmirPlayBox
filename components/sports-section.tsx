const sports = [
  {
    name: "Football",
    description: "Professional-grade artificial turf for 5-a-side, 7-a-side, and training sessions.",
    number: "01",
  },
  {
    name: "Cricket",
    description: "Premium surface for practice matches and friendly games with your team.",
    number: "02",
  },
  {
    name: "Pickleball",
    description: "Dedicated courts with perfect surface and markings for all skill levels.",
    number: "03",
  },
  {
    name: "Cricket Nets",
    description: "Professional net practice facilities for batsmen and bowlers.",
    number: "04",
  },
]

export function SportsSection() {
  return (
    <section id="sports" className="py-24 md:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Our Sports
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-[1.1]">
              Every sport,
              <br />
              one destination
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            From football to cricket, from pickleball to net practice — world-class facilities for multiple sports.
          </p>
        </div>

        {/* Sports List */}
        <div className="border-t border-border">
          {sports.map((sport) => (
            <div
              key={sport.name}
              className="group py-8 md:py-10 border-b border-border flex flex-col md:flex-row md:items-center gap-4 md:gap-12 hover:bg-secondary/50 transition-colors -mx-6 px-6"
            >
              <span className="text-sm text-muted-foreground font-mono w-8">
                {sport.number}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground flex-1">
                {sport.name}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
                {sport.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
