export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  size: "small" | "medium" | "large";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    alt: "Hotel exterior at sunset",
    category: "Architecture",
    size: "large",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
    alt: "Signature room interior",
    category: "Rooms",
    size: "medium",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=1000&fit=crop",
    alt: "Infinity pool view",
    category: "Amenities",
    size: "large",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    alt: "Fine dining experience",
    category: "Dining",
    size: "medium",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    alt: "Hotel lobby with modern art",
    category: "Architecture",
    size: "small",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    alt: "Executive suite bedroom",
    category: "Rooms",
    size: "medium",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
    alt: "Spa treatment room",
    category: "Wellness",
    size: "small",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&h=800&fit=crop",
    alt: "Presidential suite living area",
    category: "Rooms",
    size: "large",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    alt: "Hotel bar and lounge",
    category: "Dining",
    size: "medium",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=1000&fit=crop",
    alt: "Spa and wellness center",
    category: "Wellness",
    size: "large",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
    alt: "Residence private pool",
    category: "Rooms",
    size: "large",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    alt: "Fitness center",
    category: "Amenities",
    size: "small",
  },
];
