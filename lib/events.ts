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
    title: 'Kalayaan Corporate Summer Ball',
    tagline: 'Where business leaders celebrate in island style.',
    date: 'July 20, 2025',
    time: '7:00 PM',
    startsAt: '2025-07-20T19:00:00+08:00',
    location: 'The Astoria Convention Hall, Puerto Princesa',
    description: 'The Kalayaan Corporate Summer Ball brought together executives, partners, and innovators for a premium evening of celebration and strategic networking. The program featured curated live performances, executive recognition segments, immersive stage visuals, and a dining experience designed for high-level hospitality.',
    shortDescription: 'A premium corporate gala night with live entertainment, executive recognition, and elevated networking.',
    image: '/images/event-2.jpg',
    images: ['/images/event-2.jpg', '/images/event-1.jpg'],
    capacity: 500,
    tags: ['Corporate Gala', 'Networking Night', 'Executive Event', 'Puerto Princesa'],
    highlights: [
      'Multi-course plated dinner',
      'Executive recognition and awards segment',
      'Live jazz and contemporary ensemble',
      'Private lounge spaces for partner meetings'
    ],
    testimonials: [
      {
        name: 'Angela Dela Cruz',
        role: 'Operations Director, Northbay Holdings',
        quote: 'FloppyHous delivered a polished gala with flawless pacing, strong production value, and meaningful room for business conversations.'
      }
    ]
  },
  {
    id: '3',
    title: 'Rasa Shoreline Music and Arts Fest',
    tagline: 'A full-day coastal festival of music, visuals, and local flavor.',
    date: 'November 16, 2025',
    time: '3:30 PM',
    startsAt: '2025-11-16T15:30:00+08:00',
    location: 'Rasa Beachfront, Palawan',
    description: 'Rasa Shoreline Music and Arts Fest blended live performances, DJ sets, and interactive creative zones into one high-energy beachfront experience. Guests moved between performance stages, local food rows, and art installations while sunset and night lighting transformed the coast into a full festival environment.',
    shortDescription: 'A beachfront music and arts festival with live acts, DJ sets, and sunset stage energy.',
    image: '/images/event-3.jpg',
    images: ['/images/event-3.jpg', '/images/event-1.jpg', '/images/event-4.jpg'],
    artists: ['DJ Arkin', 'The Tideways', 'Sunkissed Collective', 'MC Nyx'],
    capacity: 1500,
    tags: ['Music Festival', 'Beachfront Event', 'Arts Activation', 'Live DJs'],
    highlights: [
      'Two-stage lineup from late afternoon to midnight',
      'Live mural and projection art zone',
      'Local food and drink village',
      'Sunset-to-night visual production show'
    ],
    testimonials: [
      {
        name: 'Marco Silva',
        role: 'Touring DJ',
        quote: 'From artist handling to crowd flow, the execution felt world-class while still deeply local and authentic.'
      }
    ]
  },
  {
    id: '4',
    title: 'Founders Night Live: Puerto Princesa',
    tagline: 'An anniversary concert celebrating local talent and city pride.',
    date: 'March 22, 2025',
    time: '6:00 PM',
    startsAt: '2025-03-22T18:00:00+08:00',
    location: 'Palawan Convention Center',
    description: 'Founders Night Live celebrated Puerto Princesa\'s growth through a concert-style civic program featuring local performers, guest bands, and cinematic storytelling moments. The event balanced formal protocol with festival-level stagecraft, delivering a memorable city anniversary experience for families and visitors.',
    shortDescription: 'A city anniversary concert featuring local artists, cultural storytelling, and immersive production.',
    image: '/images/event-4.jpg',
    images: ['/images/event-4.jpg', '/images/event-3.jpg'],
    artists: ['Palawan Symphony Youth', 'Rizal Street Collective', 'Aira Velasco'],
    capacity: 1800,
    tags: ['City Celebration', 'Live Concert', 'Cultural Showcase'],
    highlights: [
      'Anniversary tribute segment with multimedia storytelling',
      'Cultural and contemporary performance sets',
      'Family-friendly audience zones',
      'Full concert lighting and sound program'
    ],
    testimonials: [
      {
        name: 'Lourdes Ramos',
        role: 'Program Coordinator, City Events Office',
        quote: 'The production honored the city with heart while still feeling modern, dynamic, and professionally staged.'
      }
    ]
  },
  {
    id: '5',
    title: 'FloppyHous Creator Camp',
    tagline: 'Hands-on sessions for next-gen event and music creators.',
    date: 'September 14, 2025',
    time: '1:00 PM',
    startsAt: '2025-09-14T13:00:00+08:00',
    location: 'Creative Hub, Puerto Princesa',
    description: 'FloppyHous Creator Camp gathered students, aspiring producers, and young entrepreneurs for practical training in event execution, music programming, and creative branding. Participants rotated through masterclasses, mock production exercises, and mentorship circles led by active industry professionals.',
    shortDescription: 'A practical workshop day for aspiring event producers, creatives, and music entrepreneurs.',
    image: '/images/event-5.jpg',
    images: ['/images/event-5.jpg'],
    capacity: 100,
    tags: ['Workshop', 'Creator Education', 'Event Production', 'Mentorship'],
    highlights: [
      'Production planning and show-calling simulation',
      'Music direction and program flow workshop',
      'Mentor roundtables with local industry leaders',
      'Resource toolkit for first-time organizers'
    ],
    testimonials: [
      {
        name: 'Javi M.',
        role: 'Participant',
        quote: 'The sessions were practical, direct, and confidence-building. I left with a clear plan for my first independent event.'
      }
    ]
  },
  {
    id: '6',
    title: 'Baywalk Countdown Festival 2025',
    tagline: 'One city, one stage, one unforgettable countdown.',
    date: 'December 31, 2025',
    time: '8:00 PM',
    startsAt: '2025-12-31T20:00:00+08:00',
    location: 'Puerto Princesa Baywalk',
    description: 'Baywalk Countdown Festival 2025 capped off the year with live acts, synchronized midnight effects, and a massive community countdown by the waterfront. FloppyHous designed the crowd journey from pre-show energy to midnight finale with layered stage programming, safety zoning, and high-impact visual moments.',
    shortDescription: 'A city-scale year-end countdown with fireworks, live acts, and waterfront festival energy.',
    image: '/images/event-6.jpg',
    images: ['/images/event-6.jpg', '/images/event-1.jpg', '/images/event-3.jpg'],
    artists: ['DJ Kaya', 'Baywalk Brass Collective', 'Neon Harbor Crew'],
    capacity: 2500,
    tags: ['Countdown', 'Year-End Festival', 'Fireworks', 'Community Event'],
    highlights: [
      'Midnight fireworks and pyrotechnic finale',
      'Live stage program from 8 PM to countdown',
      'Family and VIP viewing sections',
      'Integrated safety and crowd management plan'
    ],
    testimonials: [
      {
        name: 'Patricia G.',
        role: 'Attendee',
        quote: 'The entire night felt exciting and organized from start to finish. The midnight reveal was unforgettable.'
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
