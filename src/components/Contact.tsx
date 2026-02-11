"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { HiMail, HiPaperAirplane } from "react-icons/hi";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 4000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 section-padding">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            Have a project in mind or just want to connect? Drop me a message.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all
                           duration-300 focus:ring-2 focus:ring-[var(--primary)]/50"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--card-border)",
                  color: "var(--foreground)",
                }}
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all
                           duration-300 focus:ring-2 focus:ring-[var(--primary)]/50"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--card-border)",
                  color: "var(--foreground)",
                }}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--foreground)" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all
                         duration-300 focus:ring-2 focus:ring-[var(--primary)]/50"
              style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                color: "var(--foreground)",
              }}
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
                         text-white transition-all duration-300 hover:scale-105 hover:shadow-lg
                         hover:shadow-[var(--primary)]/25"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--accent))",
              }}
            >
              <HiPaperAirplane className="w-4 h-4 rotate-45" />
              Send Message
            </button>

            {status && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm font-medium"
                style={{ color: "var(--primary)" }}
              >
                ✓ {status}
              </motion.span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
