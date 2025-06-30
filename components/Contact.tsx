"use client";

import { Mail, Phone, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: <Phone className="text-blue-400" size={32} />,
    title: "Phone",
    value: "+91 8660309675",
    href: "tel:+918660309675",
  },
  {
    icon: <Mail className="text-pink-400" size={32} />,
    title: "Email",
    value: "pratikghotaneo@gmail.com",
    href: "mailto:pratikghotaneo@gmail.com",
  },
  {
    icon: <Linkedin className="text-sky-400" size={32} />,
    title: "LinkedIn",
    value: "linkedin.com/in/pratik-ghotane-aba825289",
    href: "https://www.linkedin.com/in/pratik-ghotane-aba825289/",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-slate-900 to-slate-950 text-white overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-0 w-72 h-72 bg-indigo-400/20 rounded-full blur-[100px] animate-spin-slow" />
      </div>

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 z-10 text-center tracking-tight"
      >
        Let’s Connect
      </motion.h2>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl z-10">
        {contactItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.04,
              y: -6,
              transition: { type: "spring", stiffness: 300 },
            }}
            className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
