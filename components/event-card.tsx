import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CalendarIcon, MapPinIcon } from 'lucide-react'
import type { Event } from '@/lib/events'
import { Button } from '@/components/ui/button'

interface EventCardProps {
  event: Event
  index?: number
}

export function EventCard({ event, index = 0 }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="h-full"
    >
      <div className="group relative overflow-hidden rounded-lg bg-card border border-border h-full flex flex-col hover:border-foreground/30 transition-colors duration-300">
        {/* Image container */}
        <div className="relative w-full h-48 md:h-56 overflow-hidden bg-secondary">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-foreground transition-colors">
            {event.title}
          </h3>

          <div className="space-y-2 mb-4 flex-grow text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 flex-shrink-0" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
          </div>

          {event.artists && event.artists.length > 0 && (
            <div className="mb-4 text-xs text-muted-foreground">
              <p className="font-semibold text-foreground/70">Artists:</p>
              <p className="line-clamp-1">{event.artists.join(', ')}</p>
            </div>
          )}

          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {event.description}
          </p>

          <Link href={`/events/${event.id}`} className="mt-auto">
            <Button
              variant="outline"
              size="sm"
              className="w-full group/btn"
            >
              <span className="group-hover/btn:underline">View Details</span>
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
