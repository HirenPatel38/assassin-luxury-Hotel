export interface Testimonial {
  id: string;
  name: string;
  title: string;
  avatar: string;
  text: string;
  rating: number;
  stayDate: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Victoria Chen",
    title: "CEO, Meridian Capital",
    avatar: "VC",
    text: "Every detail felt intentional. From the architecture to the service, the entire stay felt like stepping into another world. The Presidential Suite exceeded every expectation.",
    rating: 5,
    stayDate: "January 2026",
  },
  {
    id: "t2",
    name: "Alexander Petrov",
    title: "Film Director",
    avatar: "AP",
    text: "I've stayed at luxury hotels across six continents. ASSASSIN is in a category of its own. The attention to privacy and the cinematic atmosphere are unmatched.",
    rating: 5,
    stayDate: "November 2025",
  },
  {
    id: "t3",
    name: "Isabelle Laurent",
    title: "Art Collector",
    avatar: "IL",
    text: "The art curation alone makes this hotel extraordinary. Combined with impeccable service and an atmosphere that feels both exclusive and welcoming—it's perfection.",
    rating: 5,
    stayDate: "March 2026",
  },
  {
    id: "t4",
    name: "James Harrington III",
    title: "Harrington Estate",
    avatar: "JH",
    text: "The Assassin Residence was our home for two weeks. Private garden, dedicated staff, absolute discretion. This is what true luxury hospitality looks like.",
    rating: 5,
    stayDate: "December 2025",
  },
  {
    id: "t5",
    name: "Sofia Nakamura",
    title: "Fashion Designer",
    avatar: "SN",
    text: "From the moment I arrived, I understood why people call this the most extraordinary hotel in the world. The rooftop sunset experience was simply magical.",
    rating: 5,
    stayDate: "February 2026",
  },
  {
    id: "t6",
    name: "Marcus Aurelius Blackwell",
    title: "Author & Journalist",
    avatar: "MB",
    text: "ASSASSIN doesn't just provide luxury—it curates an experience that stays with you long after checkout. The private lounge became my creative sanctuary.",
    rating: 5,
    stayDate: "April 2026",
  },
];
