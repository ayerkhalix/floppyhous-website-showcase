'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CountdownTimer } from '@/components/countdown-timer'
import { getNextEvent } from '@/lib/events'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function EventsCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const event = getNextEvent()
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay || !event) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, event])

  if (!event) {
    return null
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + 1) % 1)
    setAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % 1)
    setAutoPlay(false)
  }

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Next Event
          </h2>
          <p className="text-muted-foreground">
            Don&apos;t miss our upcoming experience
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                  >
                    {event.title}
                  </motion.h3>

                  <div className="space-y-3 text-muted-foreground mb-6">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-base"
                    >
                      <strong className="text-foreground">Date:</strong> {event.date} at {event.time}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-base"
                    >
                      <strong className="text-foreground">Location:</strong> {event.location}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-base leading-relaxed"
                    >
                      {event.description}
                    </motion.p>
                  </div>
                </div>

                {/* Countdown */}
                <div className="bg-secondary/50 border border-border rounded-lg p-6">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-sm text-muted-foreground mb-4 uppercase tracking-wide"
                  >
                    Time Until Event
                  </motion.p>
                  <CountdownTimer targetDate={event.startsAt} />
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link href={`/events/${event.id}`}>
                    <Button
                      size="lg"
                      className="w-full bg-foreground text-background hover:bg-foreground/90"
                    >
                      View Details
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={handlePrev}
              disabled={true}
              className="p-2 rounded-lg border border-border hover:border-foreground/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {[0].map((i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i)
                    setAutoPlay(false)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'bg-foreground w-8' : 'bg-border'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              disabled={true}
              className="p-2 rounded-lg border border-border hover:border-foreground/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
