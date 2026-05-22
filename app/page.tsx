import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SportsSection } from "@/components/sports-section"
import { AboutSection } from "@/components/about-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SportsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
