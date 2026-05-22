import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 md:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <span className="font-semibold text-lg tracking-tight text-foreground">
              PlayBox
            </span>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xs">
              Multi-sport turf facility in Srinagar, Kashmir. Football, Cricket, Pickleball, and Cricket Nets.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                Home
              </Link>
              <Link href="/contact" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                Contact
              </Link>
              <a 
                href="https://instagram.com/playboxkashmir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Instagram
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+918899449965" className="text-foreground hover:text-muted-foreground transition-colors">
                +91 8899449965
              </a>
              <a href="mailto:contact@playboxkashmir.com" className="text-foreground hover:text-muted-foreground transition-colors">
                contact@playboxkashmir.com
              </a>
              <span className="text-muted-foreground">
                677, Nowgam ByePass, NH1A
                <br />
                Srinagar, J&K. 190015
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PlayBox Kashmir
          </p>
          <p className="text-sm text-muted-foreground">
            Open daily 08:00 AM - 02:00 AM
          </p>
        </div>
      </div>
    </footer>
  )
}
