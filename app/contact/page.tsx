import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactDetails } from "@/components/contact-details"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactDetails />
      </main>
      <Footer />
    </>
  )
}