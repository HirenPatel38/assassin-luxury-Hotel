# BOOKING_FLOW.md — ASSASSIN Hotel

## Flow Overview

The booking system is a frontend-only implementation with three states:

```
Form → Summary → Confirmed
```

## Step 1: Booking Form

**Fields:**
- Check-in date (date picker, minimum: today)
- Check-out date (date picker, minimum: check-in date)
- Room type (select: Signature, Executive, Presidential, Residence)
- Number of guests (1-8)
- Number of rooms (1-4)

**Price Preview:**
When both dates are selected, a live price preview shows:
- Room name × nights × rooms = total

**Validation:**
- Both dates required
- Check-out must be after check-in

## Step 2: Booking Summary

Displays:
- Room name
- Check-in / Check-out dates
- Number of nights (calculated)
- Number of guests
- Number of rooms
- Rate per night
- Estimated total

**Actions:**
- Edit Booking → returns to form
- Confirm Booking → proceeds to confirmation

## Step 3: Confirmation

Displays:
- Animated checkmark icon
- "Your Reservation Request Has Been Received"
- Fake reservation reference (e.g., `ASH-A3B7K9PX`)
- Confirmation message about email follow-up
- "Book Another Stay" button → resets form

## Price Calculation

```
Total = Room Price Per Night × Number of Nights × Number of Rooms
```

Room prices:
- Signature Room: $650/night
- Executive Suite: $1,200/night
- Presidential Suite: $4,500/night
- Assassin Residence: $12,000/night

## Reservation ID Format

```
ASH-XXXXXXXX
```
Where X is a random uppercase letter or digit (8 characters).

## Data Architecture

```typescript
interface BookingData {
  checkIn: string;      // ISO date string
  checkOut: string;     // ISO date string
  guests: number;       // 1-8
  rooms: number;        // 1-4
  roomType: string;     // slug
}
```

## Future Backend Integration

When connected to Convex:
1. Replace frontend calculation with server-side pricing
2. Store booking in Convex database
3. Send confirmation email via Convex action
4. Add real-time availability checking
5. Integrate with payment gateway
