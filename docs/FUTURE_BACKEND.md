# FUTURE_BACKEND.md — ASSASSIN Hotel

## Current State

The website is currently **frontend-only**. All interactions are simulated on the client side:

- Booking: Generates fake reservation IDs
- Contact form: Shows success state without sending
- Newsletter: Shows subscribed state without storing
- Gallery: Uses static image data
- Rooms: Uses static room data

## Recommended Backend: Convex

Since the project template includes Convex, it's the natural choice for backend integration.

### Convex Schema

```typescript
// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  rooms: defineTable({
    slug: v.string(),
    name: v.string(),
    description: v.string(),
    pricePerNight: v.number(),
    size: v.string(),
    guests: v.number(),
    beds: v.string(),
    view: v.string(),
    amenities: v.array(v.string()),
    image: v.string(),
    gallery: v.array(v.string()),
  }),

  bookings: defineTable({
    roomId: v.id("rooms"),
    guestName: v.string(),
    guestEmail: v.string(),
    checkIn: v.string(),
    checkOut: v.string(),
    guests: v.number(),
    rooms: v.number(),
    totalPrice: v.number(),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("cancelled")
    ),
    reservationId: v.string(),
  }),

  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    subject: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }),

  newsletter: defineTable({
    email: v.string(),
    subscribedAt: v.number(),
  }),
});
```

### Convex Functions

```
convex/
├── rooms.ts          # Query: listRooms, getRoomBySlug
├── bookings.ts       # Mutation: createBooking, getBooking
├── contacts.ts       # Mutation: createContact
└── newsletter.ts     # Mutation: subscribe
```

## Email Integration

Recommended services (via Gravity Index):
- **Resend** — Modern transactional email API
- **SendGrid** — Enterprise email delivery
- **Postmark** — Fast, reliable transactional email

Use cases:
- Booking confirmation emails
- Contact form auto-reply
- Newsletter welcome email

## Payment Integration

Recommended services:
- **Stripe** — Payment processing
- **Square** — POS and online payments

Implementation:
1. Create Stripe checkout session in Convex action
2. Redirect to Stripe for payment
3. Webhook updates booking status

## Analytics

Recommended services:
- **Plausible** — Privacy-friendly analytics
- **Vercel Analytics** — Web vitals tracking

## Deployment

The project can be deployed to:
- **Vercel** — Automatic deploys from Git
- **Netlify** — Static site hosting
- **Cloudflare Pages** — Edge deployment

For Convex backend:
```bash
npx convex deploy
```
