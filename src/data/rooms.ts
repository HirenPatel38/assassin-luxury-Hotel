export interface Room {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  size: string;
  guests: number;
  beds: string;
  view: string;
  amenities: string[];
  pricePerNight: number;
  image: string;
  gallery: string[];
}

export const rooms: Room[] = [
  {
    id: "1",
    slug: "signature",
    name: "The Signature Room",
    tagline: "Where sophistication meets serenity",
    description:
      "An elegantly appointed retreat featuring floor-to-ceiling windows, custom Italian furnishings, and a curated art collection. Every detail has been considered to create an atmosphere of understated luxury.",
    size: "52 m²",
    guests: 2,
    beds: "King Bed",
    view: "City Skyline",
    amenities: [
      "King-size bed with Egyptian cotton linens",
      "Rainfall shower with marble finishes",
      "Smart home controls",
      "Complimentary minibar",
      "Nespresso machine",
      "24-hour room service",
      "Dedicated concierge",
      "High-speed WiFi",
    ],
    pricePerNight: 650,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "2",
    slug: "executive",
    name: "The Executive Suite",
    tagline: "Command your surroundings",
    description:
      "A spacious suite designed for the discerning traveler. Features a separate living area, private study, and panoramic views. The perfect balance of productivity and indulgence.",
    size: "85 m²",
    guests: 3,
    beds: "King Bed",
    view: "Panoramic Ocean",
    amenities: [
      "Separate living and dining area",
      "Private study with work desk",
      "Soaking tub with ocean views",
      "Walk-in closet",
      "Bose sound system",
      "Complimentary breakfast",
      "Airport transfer",
      "Private check-in",
    ],
    pricePerNight: 1200,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "3",
    slug: "presidential",
    name: "The Presidential Suite",
    tagline: "The pinnacle of luxury living",
    description:
      "Our most prestigious accommodation, spanning an entire floor with unobstructed views. Features a grand living room, private terrace, chef's kitchen, and butler service around the clock.",
    size: "180 m²",
    guests: 4,
    beds: "Emperor Bed",
    view: "360° Panoramic",
    amenities: [
      "Private terrace with plunge pool",
      "Chef's kitchen",
      "Grand piano",
      "Private elevator",
      "Butler service 24/7",
      "Helicopter transfer available",
      "Private wine cellar access",
      "In-suite spa treatments",
    ],
    pricePerNight: 4500,
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
    ],
  },
  {
    id: "4",
    slug: "residence",
    name: "The Assassin Residence",
    tagline: "A world unto itself",
    description:
      "A multi-bedroom residence that redefines the concept of luxury accommodation. With its own entrance, multiple suites, a private garden, and dedicated staff, this is your home away from home—elevated beyond imagination.",
    size: "350 m²",
    guests: 8,
    beds: "Multiple Bedrooms",
    view: "Garden & Ocean",
    amenities: [
      "3 private bedrooms",
      "Private garden and pool",
      "Full kitchen and dining",
      "Private gym and sauna",
      "Entertainment room",
      "Dedicated housekeeping",
      "Personal chef available",
      "Armored transport option",
    ],
    pricePerNight: 12000,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&h=800&fit=crop",
    ],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
