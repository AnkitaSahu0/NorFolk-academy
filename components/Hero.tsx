"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className=" min-w-xl relative h-screen flex items-center justify-center text-center text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/school.jpg')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NORFOLK ACADEMY</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Empowering students with knowledge, discipline, and creativity for a brighter future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/admissions"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium transition duration-300"
          >
            Apply Now
          </Link>

          <Link
            href="/about"
            className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}