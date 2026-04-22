'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  if (!isLoaded) {
    return null
  }

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex min-w-16 flex-col items-center md:min-w-20">
      <div className="mb-2 text-3xl font-bold text-foreground tabular-nums md:text-4xl">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest">
        {label}
      </div>
    </div>
  )

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className="text-2xl md:text-3xl text-muted-foreground font-light">:</span>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className="text-2xl md:text-3xl text-muted-foreground font-light">:</span>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <span className="text-2xl md:text-3xl text-muted-foreground font-light">:</span>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}
