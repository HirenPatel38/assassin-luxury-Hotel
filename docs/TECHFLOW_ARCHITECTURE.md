# TECHFLOW_ARCHITECTURE.md — ASSASSIN Hotel

## Application Flow

```mermaid
flowchart TD
    User["User"] --> Browser["Browser"]
    Browser --> ReactApp["React Application"]
    ReactApp --> Router["React Router"]
    Router --> Pages["Page Components"]
    Pages --> Components["Reusable Components"]
    Components --> AnimationLayer["Animation Layer (Framer Motion / GSAP)"]
    Components --> ThreeJS["3D Layer (React Three Fiber)"]
    Components --> DataLayer["Data Layer"]
    Components --> UI["UI Components (Tailwind + Custom CSS)"]
    DataLayer --> RoomData["rooms.ts"]
    DataLayer --> ExperienceData["experiences.ts"]
    DataLayer --> GalleryData["gallery.ts"]
    DataLayer --> MenuData["menu.ts"]
    DataLayer --> TestimonialData["testimonials.ts"]
    DataLayer --> HotelData["hotel.ts"]
    AnimationLayer --> ScrollReveal["Scroll Reveal"]
    AnimationLayer --> PageTransition["Page Transitions"]
    AnimationLayer --> HoverEffects["Hover Effects"]
    AnimationLayer --> TextReveal["Text Reveal"]
    ThreeJS --> Hero3D["Hero 3D Scene"]
    ThreeJS --> Room3D["Room 3D Explorer"]
```

## Component Hierarchy

```mermaid
flowchart TD
    Root["<Root>"] --> ErrorBoundary["RootErrorBoundary"]
    ErrorBoundary --> AuthProvider["ConvexAuthProvider"]
    AuthProvider --> BrowserRouter["BrowserRouter"]
    BrowserRouter --> RouteSyncer["RouteSyncer"]
    BrowserRouter --> App["App"]
    App --> Loader["LoadingScreen"]
    App --> Layout["Layout"]
    Layout --> Cursor["CustomCursor"]
    Layout --> Navbar["Navbar"]
    Layout --> MobileMenu["MobileMenu (Animated)"]
    Layout --> Routes["<Routes>"]
    Layout --> Footer["Footer"]
    Routes --> Home["Home Page"]
    Routes --> Rooms["Rooms Page"]
    Routes --> RoomDetails["Room Details Page"]
    Routes --> Experience["Experience Page"]
    Routes --> Dining["Dining Page"]
    Routes --> Gallery["Gallery Page"]
    Routes --> About["About Page"]
    Routes --> Contact["Contact Page"]
    Routes --> Booking["Booking Page"]
    Routes --> NotFound["404 Page"]
```

## Data Flow

```mermaid
flowchart LR
    subgraph DataLayer["Data Layer"]
        Rooms["rooms.ts"]
        Experiences["experiences.ts"]
        Gallery["gallery.ts"]
        Menu["menu.ts"]
        Testimonials["testimonials.ts"]
        Hotel["hotel.ts"]
    end

    subgraph Pages["Page Components"]
        HomePage["Home"]
        RoomsPage["Rooms"]
        RoomDetailPage["RoomDetails"]
        ExperiencePage["Experience"]
        DiningPage["Dining"]
        GalleryPage["Gallery"]
        AboutPage["About"]
        ContactPage["Contact"]
        BookingPage["Booking"]
    end

    subgraph Components["UI Components"]
        HeroSection["Hero"]
        RoomsHorizontal["RoomsHorizontal"]
        RoomCard["RoomCard"]
        ExperienceSection["ExperienceSection"]
        DiningSection["DiningSection"]
        MenuModal["MenuModal"]
        GalleryGrid["GalleryGrid"]
        Lightbox["Lightbox"]
        BookingForm["BookingForm"]
        ContactForm["ContactForm"]
        TestimonialsSlider["TestimonialsSlider"]
        AboutTimeline["AboutTimeline"]
        LocationSection["LocationSection"]
        CTASection["CTASection"]
        Room3DScene["Room3DScene"]
    end

    Rooms --> RoomsPage
    Rooms --> RoomDetailPage
    Rooms --> HomePage
    Experiences --> ExperiencePage
    Experiences --> HomePage
    Gallery --> GalleryPage
    Menu --> DiningPage
    Menu --> DiningSection
    Testimonials --> HomePage
    Hotel --> AboutPage
    Hotel --> HomePage
```

## Routing Architecture

```mermaid
flowchart LR
    "/" --> Home["Home"]
    "/rooms" --> Rooms["Rooms"]
    "/rooms/:slug" --> RoomDetails["RoomDetails"]
    "/experience" --> Experience["Experience"]
    "/dining" --> Dining["Dining"]
    "/gallery" --> Gallery["Gallery"]
    "/about" --> About["About"]
    "/contact" --> Contact["Contact"]
    "/book" --> Booking["Booking"]
    "*" --> NotFound["404"]
```

## Animation Architecture

```mermaid
flowchart TD
    subgraph FramerMotion["Framer Motion"]
        PageTrans["Page Transitions"]
        ScrollAnim["Scroll Animations"]
        HoverAnim["Hover Effects"]
        LayoutAnim["Layout Animations"]
        TextAnim["Text Animations"]
    end

    subgraph Components["Animated Components"]
        FadeIn["FadeIn"]
        ScaleIn["ScaleIn"]
        Stagger["StaggerChildren"]
        RevealText["RevealText"]
        ParallaxImage["ParallaxImage"]
        SectionHeading["SectionHeading"]
    end

    subgraph IntersectionObserver["Intersection Observer"]
        useInView["useInView (react-intersection-observer)"]
    end

    useInView --> FadeIn
    useInView --> ScaleIn
    useInView --> Stagger
    useInView --> RevealText
    useInView --> ParallaxImage
```

## 3D Architecture

```mermaid
flowchart TD
    subgraph ThreeDLayer["3D Layer"]
        Canvas["<Canvas>"]
        HeroScene["HeroScene"]
        RoomScene["ArchitecturalRoom"]
        Hotspots["HotspotMarker"]
    end

    subgraph R3F["React Three Fiber"]
        Fiber["useFrame"]
        Drei["OrbitControls, Float, Text, Environment"]
    end

    Canvas --> HeroScene
    Canvas --> RoomScene
    RoomScene --> Hotspots
    Fiber --> HeroScene
    Drei --> HeroScene
    Drei --> RoomScene
    Drei --> Hotspots
```

## Future API Integration

When a backend is added:
1. Replace static data imports with API calls
2. Add Convex queries/mutations for booking
3. Connect contact form to email service
4. Add real-time availability checking
5. Implement user authentication for booking history

## Future Database Integration

- Convex schema for rooms, bookings, contacts
- User accounts and booking history
- Real-time room availability
- Admin dashboard for content management
