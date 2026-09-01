# ROUTING.md — ASSASSIN Hotel

## Route Table

| Path | Component | Description |
|---|---|---|
| `/` | Home | Homepage with all sections |
| `/rooms` | Rooms | Room listing grid |
| `/rooms/:slug` | RoomDetails | Individual room detail page |
| `/experience` | Experience | Hotel experience showcase |
| `/dining` | Dining | Restaurant and menu page |
| `/gallery` | GalleryPage | Editorial photo gallery |
| `/about` | About | Hotel story and timeline |
| `/contact` | Contact | Contact form and info |
| `/book` | Booking | Booking form and confirmation |
| `*` | NotFound | Custom 404 page |

## Room Detail Routes

| Route | Room |
|---|---|
| `/rooms/signature` | The Signature Room |
| `/rooms/executive` | The Executive Suite |
| `/rooms/presidential` | The Presidential Suite |
| `/rooms/residence` | The Assassin Residence |

## Route Implementation

All routes are defined in `src/main.tsx` using React Router v7:

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/rooms" element={<Rooms />} />
  <Route path="/rooms/:slug" element={<RoomDetails />} />
  <Route path="/experience" element={<Experience />} />
  <Route path="/dining" element={<Dining />} />
  <Route path="/gallery" element={<GalleryPage />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/book" element={<Booking />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Code Splitting

All route components are lazy-loaded using `React.lazy()`:

```tsx
const Home = lazy(() => import("./pages/Home"));
const Rooms = lazy(() => import("./pages/Rooms"));
// ...
```

## Navigation

- **Navbar**: Links to Home, Rooms, Experience, Dining, Gallery, About, Contact
- **Book Now CTA**: Links to `/book`
- **Mobile Menu**: Full-screen overlay with all nav links + Book Your Stay
- **Footer**: Links to Rooms, Experience, Dining, Gallery, About, Contact
- **Scroll to Top**: Automatic on route change
