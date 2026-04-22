'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CountdownTimer } from '@/components/countdown-timer'
import { MediaGallery } from '@/components/sections/media-gallery'
import { EventHighlightsSection } from '@/components/sections/event-highlights-section'
import { EventTestimonialsSection } from '@/components/sections/event-testimonials-section'
import { RelatedEventsSection } from '@/components/sections/related-events-section'
import { getEventById, events, isEventUpcoming } from '@/lib/events'
import { CalendarIcon, MapPinIcon, UsersIcon, ArrowLeft, TagIcon } from 'lucide-react'
import { notFound } from 'next/navigation'

interface EventDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = use(params)
  const event = getEventById(id)

  if (!event) {
    notFound()
  }

  const eventImages = event.images && event.images.length > 0 ? event.images : [event.image]
  const showCountdown = isEventUpcoming(event)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Back button */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/events">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ x: -4 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Hero Section - Two Column Layout */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Left: Media Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <MediaGallery images={eventImages} title={event.title} />
            </motion.div>

            {/* Right: Event Info Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Title & Tagline */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {event.title}
                </h1>
                {event.tagline && (
                  <p className="text-lg text-muted-foreground italic">
                    {event.tagline}
                  </p>
                )}
              </div>

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
                    >
                      <TagIcon className="w-3 h-3" />
                      {tag}
                    </motion.span>
                  ))}
                </div>
              )}

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Info Cards */}
              <div className="space-y-4">
                {/* Date & Time */}
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                    Date & Time
                  </p>
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{event.date}</p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                    Location
                  </p>
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="font-medium text-foreground">{event.location}</p>
                  </div>
                </div>

                {/* Capacity */}
                {event.capacity && (
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                      Capacity
                    </p>
                    <div className="flex items-start gap-3">
                      <UsersIcon className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <p className="font-medium text-foreground">
                        Up to {event.capacity.toLocaleString()} guests
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-border" />

              {/* Countdown */}
              {showCountdown && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-secondary/50 rounded-lg p-6 space-y-4"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                    Time Until Event
                  </p>
                  <CountdownTimer targetDate={event.startsAt} />
                </motion.div>
              )}

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-3 pt-4"
              >
                <Link href="#contact" className="w-full">
                  <Button
                    size="lg"
                    className="w-full bg-foreground text-background hover:bg-foreground/90"
                  >
                    Book This Event
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  onClick={() => window.history.back()}
                >
                  Go Back
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About This Event
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              {event.description}
            </p>

            {/* Featured Artists */}
            {event.artists && event.artists.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4 pt-8"
              >
                <h3 className="text-2xl font-bold text-foreground">
                  Featured Artists & Performers
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {event.artists.map((artist) => (
                    <li
                      key={artist}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border"
                    >
                      <div className="w-2 h-2 rounded-full bg-foreground flex-shrink-0" />
                      <span className="text-foreground font-medium">{artist}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Event Highlights */}
      {event.highlights && event.highlights.length > 0 && (
        <EventHighlightsSection highlights={event.highlights} />
      )}

      {/* Testimonials */}
      {event.testimonials && event.testimonials.length > 0 && (
        <EventTestimonialsSection testimonials={event.testimonials} />
      )}

      {/* Related Events */}
      <RelatedEventsSection events={events} currentEventId={event.id} />

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Create Your Event?
              </h2>
              <p className="text-lg text-muted-foreground">
                Let FloppyHous bring your vision to life. We&apos;ll handle everything while you enjoy the celebration.
              </p>
            </div>
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 px-8"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
