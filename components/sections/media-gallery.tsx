'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface MediaGalleryProps {
  images: string[]
  title: string
}

export function MediaGallery({ images, title }: MediaGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const selectedImage = images[selectedImageIndex]

  return (
    <>
      <div className="space-y-4">
        {/* Main image */}
        <motion.div
          key={selectedImageIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative aspect-video bg-secondary rounded-lg overflow-hidden cursor-pointer group"
          onClick={() => setFullscreen(true)}
        >
          <Image
            src={selectedImage}
            alt={`${title} - Image ${selectedImageIndex + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="text-white text-sm font-medium">Click to expand</div>
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((img, idx) => (
              <motion.button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                  idx === selectedImageIndex
                    ? 'border-foreground'
                    : 'border-border hover:border-muted-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen modal */}
      {fullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setFullscreen(false)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full h-full max-w-5xl max-h-[90vh]"
          >
            <Image
              src={selectedImage}
              alt={`${title} - Fullscreen`}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setFullscreen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
