"use client";

import { motion } from "framer-motion";

export default function Scorecard() {
  return (
    <section className="px-10 py-20 text-white">
      <h1 className="text-3xl font-bold text-center mb-10">
        BTech Scorecard 📊
      </h1>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="bg-white/10 p-4 rounded-lg flex justify-between">
          <span>Semester 1</span>
          <span>7.96 SGPA</span>
        </div>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-gray-400">Overall CGPA</h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mt-2"
        >
          7.96
        </motion.p>
      </div>
    </section>
  );
}