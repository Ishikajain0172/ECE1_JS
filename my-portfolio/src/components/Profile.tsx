"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <section className="px-6 md:px-10 py-20">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About Me 👩‍💻
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >

        {/* Profile Image */}
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/image.jpeg"
              alt="Profile"
              width={320}
              height={320}
              className="rounded-2xl object-cover border border-white/10 shadow-lg"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-xl shadow-lg">

          <h2 className="text-2xl font-semibold mb-4">
            Ishika Jain
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I am a passionate Web Developer and BTech student who enjoys building
            modern, responsive, and user-friendly web applications. I love exploring
            new technologies and solving real-world problems through code.
          </p>

          <p className="text-gray-400 mt-4">
            🚀 Skills: HTML, CSS, JavaScript, React, Next.js  
            <br />
            🎯 Goal: To become a full-stack developer and work on impactful projects
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">

            {/* Resume Button */}
            <a href="/resume.pdf" target="_blank">
              <button className="bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-200 transition">
                Download Resume
              </button>
            </a>

            {/* GitHub */}
            <a href="https://github.com/your-username" target="_blank">
              <button className="border px-5 py-2 rounded-lg hover:bg-white/10 transition">
                GitHub
              </button>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/your-profile" target="_blank">
              <button className="border px-5 py-2 rounded-lg hover:bg-white/10 transition">
                LinkedIn
              </button>
            </a>

          </div>

        </div>

      </motion.div>
    </section>
  );
}