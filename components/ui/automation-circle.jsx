"use client";

import { motion } from "framer-motion";

const automationIcons = [
  { icon: "🤖", name: "AI" },
  { icon: "⚡", name: "Zapier" },
  { icon: "🔗", name: "API" },
  { icon: "📊", name: "Airtable" },
  { icon: "🔄", name: "Automation" },
  { icon: "🤝", name: "Integration" },
];

export const AutomationCircle = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background grid of icons */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-10">
        {automationIcons.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex items-center justify-center text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: idx * 0.1 }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Main circle */}
      <motion.div
        className="relative w-48 h-48 rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-[#181c2f] to-[#181a2b] border border-purple-700/60 shadow-[0_0_32px_8px_rgba(168,85,247,0.2)]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glowing number */}
        <motion.div
          className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          100+
        </motion.div>
        
        {/* Subtitle */}
        <motion.div
          className="text-lg text-gray-300 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Automations
        </motion.div>

        {/* Glowing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-500/30"
          animate={{
            boxShadow: [
              "0 0 20px rgba(168,85,247,0.3)",
              "0 0 30px rgba(168,85,247,0.4)",
              "0 0 20px rgba(168,85,247,0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}; 