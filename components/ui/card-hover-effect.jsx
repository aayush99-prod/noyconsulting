"use client";

import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const HoverEffect = ({ items, className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative group block p-2 h-full w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl h-full w-full overflow-hidden bg-gradient-to-br from-[#181c2f] to-[#181a2b] border border-purple-700/60 p-8 transition-all duration-300 group-hover:shadow-[0_0_32px_8px_rgba(168,85,247,0.4)]">
            <div className="relative z-10">
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}; 