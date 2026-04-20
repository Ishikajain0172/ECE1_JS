"use client";

import { motion } from "framer-motion";

type Certificate = {
  title: string;
  platform: string;
  image: string;
  link: string;
};

type Props = {
  cert: Certificate;
};

export default function CertificateCard({ cert }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-xl shadow-lg"
    >
      {/* Image */}
      <img
        src={cert.image}
        alt={cert.title}
        className="rounded-lg w-full h-48 object-cover"
      />

      {/* Title */}
      <h2 className="mt-4 text-lg font-semibold">
        {cert.title}
      </h2>

      {/* Platform */}
      <p className="text-gray-400">
        {cert.platform}
      </p>

      {/* Button */}
      <a href={cert.link} target="_blank" rel="noopener noreferrer">
        <button className="mt-4 w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition">
          View Certificate
        </button>
      </a>
    </motion.div>
  );
}