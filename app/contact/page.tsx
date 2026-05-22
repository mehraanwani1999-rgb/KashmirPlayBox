import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactDetails } from "@/components/contact-details"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactDetails />
      <Footer />
    </main>
  )
}
