'use client'

import { motion } from 'framer-motion'
import { getPreviousEvents } from '@/lib/events'
import { EventCard } from '@/components/event-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function PreviousEventsSection() {
  const previousEvents = getPreviousEvents().slice(0, 3)

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Previous Events
          </h2>
          <p className="text-muted-foreground">
            A showcase of our past experiences and creations
          </p>
        </motion.div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {previousEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/events">
            <Button
              variant="outline"
              size="lg"
              className="text-base md:text-lg px-8 md:px-12 py-6 md:py-7"
            >
              View All Events
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
