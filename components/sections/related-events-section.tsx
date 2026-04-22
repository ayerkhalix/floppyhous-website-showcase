'use client'

import { motion } from 'framer-motion'
import { EventCard } from '@/components/event-card'
import type { Event } from '@/lib/events'

interface RelatedEventsSectionProps {
  events: Event[]
  currentEventId: string
}

export function RelatedEventsSection({ events, currentEventId }: RelatedEventsSectionProps) {
  const relatedEvents = events.filter(e => e.id !== currentEventId).slice(0, 3)

  if (relatedEvents.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            More From FloppyHous
          </h2>
          <p className="text-muted-foreground mt-2">
            Check out our other amazing experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {relatedEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
