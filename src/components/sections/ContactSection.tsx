"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import type { IconType } from "react-icons";

interface Social {
  icon: IconType;
  href: string;
  label: string;
}

const socials: Social[] = [
  { icon: FiGithub, href: "https://github.com/satvikpathak", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/satvik-pathak-601833331/", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/satvikpathak007", label: "X" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/satvikpathak007/", label: "LeetCode" },
  { icon: FiMail, href: "mailto:satvikpathak007@gmail.com", label: "Email" },
];

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(`mailto:satvikpathak007@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setStatus("Opening your email client...");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(""), 4000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base font-medium mb-2" style={{ color: "var(--foreground)" }}>
              Name
            </label>
            <input
              id="name" name="name" type="text" required
              value={formData.name} onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl text-sm sm:text-base outline-none transition-all duration-300
                         focus:ring-2 focus:ring-[var(--foreground)]/30"
              style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)" }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-2" style={{ color: "var(--foreground)" }}>
              Email
            </label>
            <input
              id="email" name="email" type="email" required
              value={formData.email} onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl text-sm sm:text-base outline-none transition-all duration-300
                         focus:ring-2 focus:ring-[var(--foreground)]/30"
              style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)" }}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm sm:text-base font-medium mb-2" style={{ color: "var(--foreground)" }}>
            Message
          </label>
          <textarea
            id="message" name="message" required rows={5}
            value={formData.message} onChange={handleChange}
            placeholder="Contact to know more..."
            className="w-full px-4 py-3 rounded-xl text-sm sm:text-base outline-none resize-none transition-all duration-300
                       focus:ring-2 focus:ring-[var(--foreground)]/30"
            style={{ background: "var(--card)", border: "1px solid var(--card-border)", color: "var(--foreground)" }}
          />
        </div>

        <div className="flex items-center gap-4">
          <button type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
                       transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: "var(--foreground)", color: "var(--background)" }}
          >
            <HiPaperAirplane className="w-4 h-4 rotate-45" /> Send Message
          </button>

          {status && (
            <span className="text-sm font-medium" style={{ color: "var(--foreground)", opacity: 0.7 }}>
              ✓ {status}
            </span>
          )}
        </div>
      </form>

      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-4" style={{ color: "var(--foreground)" }}>Find me elsewhere</h3>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="p-3 rounded-xl glass transition-all duration-300 hover:scale-110
                         hover:shadow-lg hover:shadow-[var(--foreground)]/10"
              style={{ color: "var(--foreground)", opacity: 0.6 }}
            >
              <s.icon className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
