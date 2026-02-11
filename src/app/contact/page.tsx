"use client";

import ClientShell from "@/components/ClientShell";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiYoutube, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "https://github.com/satvik", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/satvik", label: "LinkedIn" },
  { icon: FiYoutube, href: "https://youtube.com/@satvik", label: "YouTube" },
  { icon: FiMail, href: "mailto:satvik@example.com", label: "Email" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
    <ClientShell>
      <div className="space-y-10 max-w-2xl">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-sm sm:text-base mt-3" style={{ color: "var(--muted)" }}>
            Have a project in mind or just want to connect? Drop me a message.
          </p>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>
                Name
              </label>
              <input
                id="name" name="name" type="text" required
                value={formData.name} onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300
                           focus:ring-2 focus:ring-[var(--primary)]/50"
                style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)" }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>
                Email
              </label>
              <input
                id="email" name="email" type="email" required
                value={formData.email} onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300
                           focus:ring-2 focus:ring-[var(--primary)]/50"
                style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)" }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "var(--foreground)" }}>
              Message
            </label>
            <textarea
              id="message" name="message" required rows={5}
              value={formData.message} onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-300
                         focus:ring-2 focus:ring-[var(--primary)]/50"
              style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)" }}
            />
          </div>

          <div className="flex items-center gap-4">
            <button type="submit"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white
                         transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--primary)]/25"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))" }}
            >
              <HiPaperAirplane className="w-4 h-4 rotate-45" /> Send Message
            </button>

            {status && (
              <span className="text-sm font-medium" style={{ color: "var(--primary)" }}>
                ✓ {status}
              </span>
            )}
          </div>
        </form>

        {/* Social links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Find me elsewhere</h3>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="p-3 rounded-xl glass transition-all duration-300 hover:scale-110
                           hover:shadow-lg hover:shadow-[var(--primary)]/15"
                style={{ color: "var(--muted)" }}
              >
                <s.icon className="w-5 h-5 hover:text-[var(--primary)] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </ClientShell>
  );
}
