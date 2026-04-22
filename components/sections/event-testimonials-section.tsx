'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Testimonial } from '@/lib/events'

interface EventTestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function EventTestimonialsSection({ testimonials }: EventTestimonialsSectionProps) {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, testimonials.length])

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What People Are Saying
          </h2>
          <p className="text-muted-foreground mt-2">
            Real feedback from attendees and collaborators
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-8 md:p-10"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.5-5-7-5S0 3.75 0 5v8c0 7 4 8 7 8z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.5-5-7-5S8 3.75 8 5v8c0 7 4 8 7 8z" />
                </svg>
              </div>
              <blockquote className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                "{testimonials[current].quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {testimonials.length > 1 && (
            <>
              <div className="flex gap-3 mt-8 justify-center">
                <button
                  onClick={goToPrevious}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2 items-center">
                  {testimonials.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => {
                        setCurrent(idx)
                        setAutoPlay(false)
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === current ? 'bg-foreground w-8' : 'bg-border w-2'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
                <button
                  onClick={goToNext}
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                  className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
