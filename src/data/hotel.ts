export const hotelInfo = {
  name: "ASSASSIN",
  tagline: "LIVE BEYOND ORDINARY",
  description:
    "ASSASSIN is a fictional luxury hotel brand that embodies the pinnacle of modern hospitality. Our philosophy centers on architecture, atmosphere, and unforgettable experiences crafted for the world's most discerning travelers.",
  address: "1200 Oceanfront Boulevard, Marina District",
  city: "Dubai, UAE",
  country: "United Arab Emirates",
  phone: "+971 4 555 0199",
  email: "reservations@assassinhotel.com",
  airport: "Dubai International Airport (DXB)",
  airportDistance: "15 minutes by private transfer",
  nearbyAttractions: [
    "Dubai Marina — 5 minutes",
    "Palm Jumeirah — 10 minutes",
    "Dubai Mall — 20 minutes",
    "Desert Safari Experience — 45 minutes",
  ],
  founded: 2018,
  rooms: 127,
  restaurants: 4,
  awards: [
    "World Luxury Hotel Awards 2025",
    "Condé Nast Traveler Gold List 2026",
    "Forbes Travel Guide Five-Star Rating",
    "World Travel Awards — Middle East's Leading Luxury Hotel",
  ],
};

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "2018",
    title: "Vision",
    description:
      "A bold concept emerges: to create the world's most architecturally striking luxury hotel, where every space tells a story.",
  },
  {
    year: "2019",
    title: "Foundation",
    description:
      "Construction begins on the Marina District waterfront. World-renowned architect studios are commissioned to realize the vision.",
  },
  {
    year: "2021",
    title: "Design",
    description:
      "Interior design teams from Milan, Tokyo, and New York collaborate on creating unique atmospheres for each space within the hotel.",
  },
  {
    year: "2023",
    title: "Opening",
    description:
      "ASSASSIN Hotel opens its doors to the world, immediately earning recognition as one of the most extraordinary new hotel experiences.",
  },
  {
    year: "Today",
    title: "Legacy",
    description:
      "Continuing to redefine luxury hospitality with innovative experiences, architectural evolution, and an unwavering commitment to excellence.",
  },
];
