"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { rooms } from "@/data/rooms";
import {
  formatPrice,
  calculateNights,
  generateReservationId,
} from "@/utils/formatters";
import { Calendar, Users, Bed, CheckCircle } from "lucide-react";

type BookingState = "form" | "summary" | "confirmed";

interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  roomType: string;
}

export default function BookingForm() {
  const [state, setState] = useState<BookingState>("form");
  const [data, setData] = useState<BookingData>({
    checkIn: "",
    checkOut: "",
    guests: 2,
    rooms: 1,
    roomType: "signature",
  });
  const [reservationId, setReservationId] = useState("");

  const selectedRoom = rooms.find((r) => r.slug === data.roomType) || rooms[0];
  const nights =
    data.checkIn && data.checkOut
      ? calculateNights(data.checkIn, data.checkOut)
      : 1;
  const total = selectedRoom.pricePerNight * nights * data.rooms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.checkIn || !data.checkOut) return;
    setState("summary");
  };

  const confirmBooking = () => {
    setReservationId(generateReservationId());
    setState("confirmed");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {state === "form" && (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="p-8 md:p-12"
            style={{
              background: "var(--color-midnight)",
              border: "1px solid rgba(201,168,76,0.12)",
              borderRadius: "var(--radius-md)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Check-in */}
              <div>
                <label
                  className="label block mb-2"
                  htmlFor="checkin"
                >
                  Check-in
                </label>
                <div className="relative">
                  <Calendar
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--color-gold)" }}
                  />
                  <input
                    id="checkin"
                    type="date"
                    min={today}
                    value={data.checkIn}
                    onChange={(e) =>
                      setData({ ...data, checkIn: e.target.value })
                    }
                    required
                    className="w-full pl-12 pr-4 py-4 text-sm outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "var(--color-pearl)",
                      borderRadius: "var(--radius)",
                    }}
                  />
                </div>
              </div>

              {/* Check-out */}
              <div>
                <label
                  className="label block mb-2"
                  htmlFor="checkout"
                >
                  Check-out
                </label>
                <div className="relative">
                  <Calendar
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--color-gold)" }}
                  />
                  <input
                    id="checkout"
                    type="date"
                    min={data.checkIn || today}
                    value={data.checkOut}
                    onChange={(e) =>
                      setData({ ...data, checkOut: e.target.value })
                    }
                    required
                    className="w-full pl-12 pr-4 py-4 text-sm outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "var(--color-pearl)",
                      borderRadius: "var(--radius)",
                    }}
                  />
                </div>
              </div>

              {/* Room Type */}
              <div>
                <label
                  className="label block mb-2"
                  htmlFor="room-type"
                >
                  Room Type
                </label>
                <div className="relative">
                  <Bed
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--color-gold)" }}
                  />
                  <select
                    id="room-type"
                    value={data.roomType}
                    onChange={(e) =>
                      setData({ ...data, roomType: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-4 text-sm outline-none appearance-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "var(--color-pearl)",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    {rooms.map((r) => (
                      <option
                        key={r.slug}
                        value={r.slug}
                        style={{ background: "var(--color-midnight)" }}
                      >
                        {r.name} — {formatPrice(r.pricePerNight)}/night
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div>
                <label
                  className="label block mb-2"
                  htmlFor="guests"
                >
                  Guests
                </label>
                <div className="relative">
                  <Users
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--color-gold)" }}
                  />
                  <select
                    id="guests"
                    value={data.guests}
                    onChange={(e) =>
                      setData({ ...data, guests: Number(e.target.value) })
                    }
                    className="w-full pl-12 pr-4 py-4 text-sm outline-none appearance-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "var(--color-pearl)",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option
                        key={n}
                        value={n}
                        style={{ background: "var(--color-midnight)" }}
                      >
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Rooms Count */}
              <div>
                <label
                  className="label block mb-2"
                  htmlFor="rooms-count"
                >
                  Number of Rooms
                </label>
                <div className="relative">
                  <Bed
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "var(--color-gold)" }}
                  />
                  <select
                    id="rooms-count"
                    value={data.rooms}
                    onChange={(e) =>
                      setData({ ...data, rooms: Number(e.target.value) })
                    }
                    className="w-full pl-12 pr-4 py-4 text-sm outline-none appearance-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "var(--color-pearl)",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option
                        key={n}
                        value={n}
                        style={{ background: "var(--color-midnight)" }}
                      >
                        {n} {n === 1 ? "Room" : "Rooms"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Price Preview */}
            {data.checkIn && data.checkOut && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-8 p-6"
                style={{
                  background: "rgba(201,168,76,0.05)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "var(--radius)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: "var(--color-mist)" }}>
                    {selectedRoom.name} × {nights} nights × {data.rooms} room{nights > 1 ? "s" : ""}
                  </span>
                  <span
                    className="text-xl font-semibold"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
                  >
                    {formatPrice(total)}
                  </span>
                </div>
              </motion.div>
            )}

            {/* Submit */}
            <div className="mt-8 text-center">
              <button type="submit" className="btn-primary">
                <span>Check Availability</span>
              </button>
            </div>
          </motion.form>
        )}

        {state === "summary" && (
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8 md:p-12"
            style={{
              background: "var(--color-midnight)",
              border: "1px solid rgba(201,168,76,0.12)",
              borderRadius: "var(--radius-md)",
            }}
          >
            <h3
              className="text-2xl mb-8"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
            >
              Booking Summary
            </h3>

            <div className="space-y-4 mb-8">
              {[
                ["Room", selectedRoom.name],
                ["Check-in", data.checkIn],
                ["Check-out", data.checkOut],
                ["Nights", String(nights)],
                ["Guests", String(data.guests)],
                ["Rooms", String(data.rooms)],
                ["Rate", `${formatPrice(selectedRoom.pricePerNight)} / night`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between py-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span className="text-sm" style={{ color: "var(--color-smoke)" }}>
                    {label}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--color-pearl)" }}>
                    {value}
                  </span>
                </div>
              ))}

              <div className="flex justify-between py-4">
                <span className="text-lg font-medium" style={{ color: "var(--color-pearl)" }}>
                  Estimated Total
                </span>
                <span
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
                >
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                className="btn-outline text-[11px]"
                onClick={() => setState("form")}
              >
                <span>Edit Booking</span>
              </button>
              <button className="btn-primary" onClick={confirmBooking}>
                <span>Confirm Booking</span>
              </button>
            </div>
          </motion.div>
        )}

        {state === "confirmed" && (
          <motion.div
            key="confirmed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 md:p-16 text-center"
            style={{
              background: "var(--color-midnight)",
              border: "1px solid rgba(201,168,76,0.12)",
              borderRadius: "var(--radius-md)",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <CheckCircle
                size={64}
                style={{ color: "var(--color-gold)" }}
                className="mx-auto mb-6"
              />
            </motion.div>

            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
            >
              Your Reservation Request<br />Has Been Received
            </h3>

            <p className="text-sm mb-6" style={{ color: "var(--color-smoke)" }}>
              Confirmation number
            </p>
            <p
              className="text-2xl tracking-[0.15em] mb-8"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-pearl)",
                letterSpacing: "0.15em",
              }}
            >
              {reservationId}
            </p>

            <p className="text-sm max-w-md mx-auto mb-8" style={{ color: "var(--color-smoke)" }}>
              We will send a detailed confirmation to your email. Our concierge team
              will contact you within 24 hours to finalize your stay details.
            </p>

            <button
              className="btn-outline text-[11px]"
              onClick={() => {
                setState("form");
                setData({
                  checkIn: "",
                  checkOut: "",
                  guests: 2,
                  rooms: 1,
                  roomType: "signature",
                });
              }}
            >
              <span>Book Another Stay</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
