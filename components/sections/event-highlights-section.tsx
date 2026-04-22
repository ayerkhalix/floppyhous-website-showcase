'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from 'lucide-react'

interface EventHighlightsSectionProps {
  highlights: string[]
}

export function EventHighlightsSection({ highlights }: EventHighlightsSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Event Highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-foreground text-background">
                  <CheckIcon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <p className="text-lg text-foreground font-medium">{highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
