import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero-section'
import { EventsCarouselSection } from '@/components/sections/events-carousel-section'
import { PreviousEventsSection } from '@/components/sections/previous-events-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { AboutSection } from '@/components/sections/about-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EventsCarouselSection />
      <PreviousEventsSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
