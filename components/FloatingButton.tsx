"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function FloatingButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 1
        , y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 18px rgba(99,102,241,0.5)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="fixed bottom-6 right-6 z-50  p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500 text-red-400 hover:text-indigo-400 shadow-lg"
    >
      <ArrowUp size={24} />
    </motion.button>
  )
}
