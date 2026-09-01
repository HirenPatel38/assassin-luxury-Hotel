"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { validateEmail, validatePhone } from "@/utils/formatters";
import { CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!data.name.trim()) errs.name = "Name is required";
    else if (data.name.trim().length < 2) errs.name = "Name must be at least 2 characters";

    if (!data.email.trim()) errs.email = "Email is required";
    else if (!validateEmail(data.email)) errs.email = "Please enter a valid email";

    if (data.phone && !validatePhone(data.phone))
      errs.phone = "Please enter a valid phone number";

    if (!data.subject.trim()) errs.subject = "Subject is required";

    if (!data.message.trim()) errs.message = "Message is required";
    else if (data.message.trim().length < 10)
      errs.message = "Message must be at least 10 characters";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(201,168,76,0.2)",
    color: "var(--color-pearl)",
    borderRadius: "var(--radius)",
  };

  const focusStyle = "focus:border-[var(--color-gold)] focus:outline-none";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-12 text-center"
        style={{
          background: "var(--color-midnight)",
          border: "1px solid rgba(201,168,76,0.12)",
          borderRadius: "var(--radius-md)",
        }}
      >
        <CheckCircle
          size={64}
          style={{ color: "var(--color-gold)" }}
          className="mx-auto mb-6"
        />
        <h3
          className="text-2xl mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
        >
          Message Sent
        </h3>
        <p className="text-sm" style={{ color: "var(--color-smoke)" }}>
          Thank you for reaching out. Our team will respond within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 md:p-12"
      style={{
        background: "var(--color-midnight)",
        border: "1px solid rgba(201,168,76,0.12)",
        borderRadius: "var(--radius-md)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="label block mb-2" htmlFor="contact-name">
            Name *
          </label>
          <input
            id="contact-name"
            type="text"
            value={data.name}
            onChange={(e) => { setData({ ...data, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
            className={`w-full px-4 py-4 text-sm outline-none transition-all duration-300 ${focusStyle}`}
            style={inputStyle}
          />
          {errors.name && (
            <p className="text-xs mt-1" style={{ color: "var(--color-destructive)" }}>{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="label block mb-2" htmlFor="contact-email">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            value={data.email}
            onChange={(e) => { setData({ ...data, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
            className={`w-full px-4 py-4 text-sm outline-none transition-all duration-300 ${focusStyle}`}
            style={inputStyle}
          />
          {errors.email && (
            <p className="text-xs mt-1" style={{ color: "var(--color-destructive)" }}>{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="label block mb-2" htmlFor="contact-phone">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={data.phone}
            onChange={(e) => { setData({ ...data, phone: e.target.value }); setErrors({ ...errors, phone: undefined }); }}
            className={`w-full px-4 py-4 text-sm outline-none transition-all duration-300 ${focusStyle}`}
            style={inputStyle}
          />
          {errors.phone && (
            <p className="text-xs mt-1" style={{ color: "var(--color-destructive)" }}>{errors.phone}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="label block mb-2" htmlFor="contact-subject">
            Subject *
          </label>
          <input
            id="contact-subject"
            type="text"
            value={data.subject}
            onChange={(e) => { setData({ ...data, subject: e.target.value }); setErrors({ ...errors, subject: undefined }); }}
            className={`w-full px-4 py-4 text-sm outline-none transition-all duration-300 ${focusStyle}`}
            style={inputStyle}
          />
          {errors.subject && (
            <p className="text-xs mt-1" style={{ color: "var(--color-destructive)" }}>{errors.subject}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label className="label block mb-2" htmlFor="contact-message">
          Message *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={data.message}
          onChange={(e) => { setData({ ...data, message: e.target.value }); setErrors({ ...errors, message: undefined }); }}
          className={`w-full px-4 py-4 text-sm outline-none transition-all duration-300 resize-none ${focusStyle}`}
          style={inputStyle}
        />
        {errors.message && (
          <p className="text-xs mt-1" style={{ color: "var(--color-destructive)" }}>{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <div className="mt-8 text-center">
        <button type="submit" className="btn-primary">
          <span>Send Message</span>
        </button>
      </div>
    </form>
  );
}
