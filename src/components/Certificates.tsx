"use client";

import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

const certificates = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "Udemy",
    date: "2024",
    link: "#",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2024",
    link: "#",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "GeeksforGeeks",
    date: "2023",
    link: "#",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Certificates</span> & Credentials
          </h2>
          <p className="max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            Professional certifications and completed courses.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {certificates.map((cert) => (
            <motion.a
              key={cert.title}
              variants={item}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass rounded-2xl p-6 group cursor-pointer transition-shadow
                         duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/10 block"
            >
              {/* Icon placeholder */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                }}
              >
                <HiExternalLink className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-sm font-bold mb-1" style={{ color: "var(--foreground)" }}>
                {cert.title}
              </h3>
              <p className="text-xs mb-2" style={{ color: "var(--primary)" }}>
                {cert.issuer}
              </p>
              <p className="text-xs font-mono" style={{ color: "var(--muted)" }}>
                {cert.date}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
