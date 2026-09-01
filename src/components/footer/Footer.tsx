"use client";

import { useState } from "react";
import { Link } from "react-router";
import { FadeIn } from "@/components/common/FadeIn";
import { validateEmail } from "@/utils/formatters";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Rooms", path: "/rooms" },
      { label: "Experience", path: "/experience" },
      { label: "Dining", path: "/dining" },
      { label: "Gallery", path: "/gallery" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", url: "#" },
  { icon: Facebook, label: "Facebook", url: "#" },
  { icon: Twitter, label: "X", url: "#" },
  { icon: Youtube, label: "YouTube", url: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    setEmailError("");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative pt-24 pb-8" style={{ background: "#050505" }}>
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }}
      />

      <div className="container-assassin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <FadeIn className="lg:col-span-5">
            <h3
              className="text-3xl tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
            >
              ASSASSIN
            </h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--color-smoke)" }}>
              A luxury hotel experience designed around architecture, atmosphere,
              and unforgettable moments.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm" style={{ color: "var(--color-mist)" }}>
              <p>1200 Oceanfront Boulevard, Marina District</p>
              <p>Dubai, UAE</p>
              <p className="mt-4">
                <a href="mailto:reservations@assassinhotel.com" className="hover:text-[var(--color-gold)] transition-colors">
                  reservations@assassinhotel.com
                </a>
              </p>
              <p>
                <a href="tel:+97145550199" className="hover:text-[var(--color-gold)] transition-colors">
                  +971 4 555 0199
                </a>
              </p>
            </div>
          </FadeIn>

          {/* Navigation Links */}
          <FadeIn delay={0.1} className="lg:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "var(--color-gold)" }}>
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {footerLinks[0].links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm transition-colors hover:text-[var(--color-gold)]"
                  style={{ color: "var(--color-mist)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </FadeIn>

          {/* Social + Newsletter */}
          <FadeIn delay={0.2} className="lg:col-span-4">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "var(--color-gold)" }}>
              Stay Connected
            </h4>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "var(--color-mist)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(201,168,76,0.1)";
                    e.currentTarget.style.borderColor = "var(--color-gold)";
                    e.currentTarget.style.color = "var(--color-gold)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                    e.currentTarget.style.color = "var(--color-mist)";
                  }}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--color-gold)" }}>
              Newsletter
            </h4>
            {subscribed ? (
              <p className="text-sm" style={{ color: "var(--color-gold)" }}>
                Thank you for subscribing.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 text-sm outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "var(--color-pearl)",
                      borderRadius: "var(--radius)",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "var(--color-gold)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"; }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 text-[11px] font-semibold tracking-[0.15em] uppercase transition-all duration-300"
                    style={{
                      background: "var(--color-gold)",
                      color: "var(--color-obsidian)",
                      borderRadius: "var(--radius)",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
                {emailError && (
                  <p className="text-xs" style={{ color: "var(--color-destructive)" }}>
                    {emailError}
                  </p>
                )}
              </form>
            )}
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-smoke)" }}>
            © 2026 ASSASSIN Hotel. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs" style={{ color: "var(--color-smoke)" }}>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-gold)] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
