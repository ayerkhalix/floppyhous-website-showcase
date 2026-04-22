'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                About FloppyHous
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2016 in the vibrant island of Palawan, FloppyHous emerged from a passion for music, creativity, and unforgettable experiences. What started as a small local initiative has grown into a premier event management company trusted by corporate clients, artists, and event organizers alike.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of live experiences to transform and inspire. Our mission is to create premium, culturally-rich events that celebrate music, art, and community. From intimate workshops to massive festivals, we handle every detail with precision and passion.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Why Choose Us
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <span>Award-winning creative production and event management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <span>Deep expertise in music events and corporate experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <span>Professional team dedicated to your vision and success</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <span>Strategic partnerships with top venues and service providers</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/event-1.jpg"
              alt="FloppyHous team at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
