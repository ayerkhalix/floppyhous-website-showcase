export interface Testimonial {
  name: string
  role: string
  quote: string
}

export interface Event {
  id: string
  title: string
  date: string
  time: string
  startsAt: string
  location: string
  description: string
  shortDescription?: string
  tagline?: string
  image: string
  images?: string[]
  videos?: string[]
  artists?: string[]
  capacity?: number
  tags?: string[]
  testimonials?: Testimonial[]
  highlights?: string[]
}

export const events: Event[] = [
  {
    id: '1',
    title: 'La Princesa Music Beach Party',
    tagline: 'Palawan’s hottest beach party is here.',
    date: 'May 01, 2026',
    time: '5:00 PM',
    startsAt: '2026-05-01T17:00:00+08:00',
    location: 'Aliva Beach Picnic Ground',
    description: 'Get ready for a night of music, waves, and unforgettable island vibes at the La Princesa Music Beach Party. Experience the magic as the sun sets and the party begins with a sunset music rave, live reggae bands, and a late-night party set from DJ Cathy Frey. Bring your barkada, feel the ocean breeze, dance under the stars, and celebrate life the island way in partnership with the City Government of Puerto Princesa and Puerto Princesa Tourism.',
    shortDescription: 'A sunset beach party with local artists, reggae bands, DJ Cathy Frey, a free drink, and island energy all night long.',
    image: '/images/event-1.jpg',
    images: ['/images/event-1.jpg', '/images/event-3.jpg', '/images/event-4.jpg'],
    artists: ['DJ Cathy Frey', 'FDJ Lolita', 'Lagundi', 'Walwal', 'Patrick and the BlueBalls', 'Carlos N Charlies'],
    capacity: 2000,
    tags: ['Beach Party', 'Sunset Music Rave', 'Live Reggae', 'Puerto Princesa', 'Island Vibes'],
    highlights: [
      'Entrance fee is P250 only',
      'Free drink included with every ticket',
      'Chance to win an overnight stay for 2 with breakfast',
      'Sunset music rave featuring talented Palaweno local artists',
      'Live reggae bands and a late-night DJ set from DJ Cathy Frey'
    ],
    testimonials: [
      {
        name: 'Island Events PH',
        role: 'Community Partner',
        quote: 'This one feels like the perfect mix of local music culture, beach energy, and a real Puerto Princesa crowd.'
      }
    ]
  },
  {
    id: '2',
    title: 'Corporate Gala 2024',
    tagline: 'Elegance & Networking Excellence',
    date: 'July 20, 2024',
    time: '7:00 PM',
    startsAt: '2024-07-20T19:00:00+08:00',
    location: 'Island Paradise Resort, Puerto Princesa',
    description: 'An elegant evening for corporate clients featuring live performances, premium catering, and networking opportunities. Perfect for celebrating corporate milestones and building lasting business connections in an upscale tropical setting.',
    shortDescription: 'An elegant evening for corporate clients featuring live performances and premium catering.',
    image: '/images/event-2.jpg',
    images: ['/images/event-2.jpg', '/images/event-1.jpg'],
    capacity: 500,
    tags: ['Corporate Event', 'Gala', 'Networking', 'Premium Experience'],
    highlights: [
      '5-star catering service',
      'Live jazz band',
      'Exclusive networking areas',
      'Premium bar service'
    ],
    testimonials: [
      {
        name: 'Roberto Martinez',
        role: 'CEO, Tech Solutions Inc.',
        quote: 'FloppyHous transformed our annual gala into an unforgettable experience. Highly recommended!'
      }
    ]
  },
  {
    id: '3',
    title: 'Beach Music Fest',
    tagline: 'Sun, Music & Sunset Magic',
    date: 'August 10, 2024',
    time: '4:00 PM',
    startsAt: '2024-08-10T16:00:00+08:00',
    location: 'White Beach, Palawan',
    description: 'A beachfront celebration with DJ performances, live bands, and an unforgettable sunset experience. Feel the sand between your toes as world-class DJs spin tracks against the backdrop of Palawan\'s most stunning sunsets. This is music, nature, and celebration combined.',
    shortDescription: 'A beachfront celebration with DJ performances and an unforgettable sunset.',
    image: '/images/event-3.jpg',
    images: ['/images/event-3.jpg', '/images/event-1.jpg', '/images/event-4.jpg'],
    artists: ['DJ Phoenix', 'The Waves Band', 'Luna Sunset DJs'],
    capacity: 1500,
    tags: ['Beach Party', 'Music Festival', 'DJ Performance', 'Sunset Experience'],
    highlights: [
      'International DJs',
      'Live band performances',
      'Beachfront lounge',
      'Sunset prime time'
    ],
    testimonials: [
      {
        name: 'Sophie Johnson',
        role: 'International DJ',
        quote: 'Amazing venue, amazing crowd! FloppyHous really knows how to put on a show.'
      }
    ]
  },
  {
    id: '4',
    title: 'Spring Music Festival 2024',
    tagline: 'Emerging & Established Talent',
    date: 'April 22, 2024',
    time: '5:00 PM',
    startsAt: '2024-04-22T17:00:00+08:00',
    location: 'Palawan Convention Center',
    description: 'A vibrant celebration of music and culture with performances from emerging and established artists. Spring arrived with incredible energy as we showcased the diversity of Philippine music talent.',
    shortDescription: 'A vibrant celebration of music and culture.',
    image: '/images/event-4.jpg',
    images: ['/images/event-4.jpg', '/images/event-3.jpg'],
    artists: ['Various Performers', 'Rising Stars', 'Veteran Artists'],
    capacity: 1800,
    tags: ['Music Festival', 'Cultural Celebration', 'Live Performance'],
    testimonials: [
      {
        name: 'Michael Chen',
        role: 'Music Journalist',
        quote: 'FloppyHous\'s curation was impeccable. A true celebration of Philippine music.'
      }
    ]
  },
  {
    id: '5',
    title: 'Creative Workshop Series',
    tagline: 'Learn from Industry Experts',
    date: 'May 5, 2024',
    time: '2:00 PM',
    startsAt: '2024-05-05T14:00:00+08:00',
    location: 'Creative Hub, Puerto Princesa',
    description: 'Interactive workshops featuring music production, event planning, and creative entrepreneurship. Led by industry experts, these hands-on sessions provide practical knowledge and networking opportunities for aspiring creative professionals.',
    shortDescription: 'Interactive workshops on music production and creative entrepreneurship.',
    image: '/images/event-5.jpg',
    images: ['/images/event-5.jpg'],
    capacity: 100,
    tags: ['Workshop', 'Education', 'Music Production', 'Entrepreneurship'],
    highlights: [
      'Expert-led sessions',
      'Hands-on demonstrations',
      'Networking lunch',
      'Digital resources pack'
    ],
    testimonials: [
      {
        name: 'Lisa Wong',
        role: 'Music Producer',
        quote: 'Incredibly educational. I learned so much from the expert instructors!'
      }
    ]
  },
  {
    id: '6',
    title: 'Year-End Celebration',
    tagline: 'Countdown to New Beginnings',
    date: 'December 28, 2023',
    time: '8:00 PM',
    startsAt: '2023-12-28T20:00:00+08:00',
    location: 'Waterfront Park, Palawan',
    description: 'A spectacular year-end bash with fireworks, performances, and a countdown to remember. We celebrated an incredible year with spectacular fireworks, live performances, and the energy of a thousand people ready to embrace the future.',
    shortDescription: 'A spectacular year-end bash with fireworks and performances.',
    image: '/images/event-6.jpg',
    images: ['/images/event-6.jpg', '/images/event-1.jpg', '/images/event-3.jpg'],
    artists: ['DJ Masters', 'Live Orchestra', 'Featured Performers'],
    capacity: 2500,
    tags: ['Celebration', 'Year-End', 'Fireworks', 'Live Performance'],
    highlights: [
      'Spectacular fireworks show',
      'Live orchestra performance',
      'Countdown celebration',
      'Gourmet dining'
    ],
    testimonials: [
      {
        name: 'Carlos Rodriguez',
        role: 'Attendee',
        quote: 'What an amazing way to end the year! FloppyHous made it truly special and memorable.'
      }
    ]
  },
]

export const isEventUpcoming = (event: Event) => new Date(event.startsAt).getTime() > Date.now()
export const getUpcomingEvents = () =>
  events
    .filter(isEventUpcoming)
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())
export const getPreviousEvents = () =>
  events
    .filter((event) => !isEventUpcoming(event))
    .sort((a, b) => new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime())
export const getEventById = (id: string) => events.find(e => e.id === id)
export const getNextEvent = () => {
  const upcoming = getUpcomingEvents()
  return upcoming.length > 0 ? upcoming[0] : null
}
