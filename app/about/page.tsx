"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function Counter({ end }: { end: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return <span>{count}</span>;
}

export default function AboutSection() {
  return (
    <section id="about" className="min-w-3xl py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl text-black md:text-5xl font-extrabold">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NorFolk Academy
            </span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Building strong foundations for a lifetime of success through
            excellence, discipline, and innovation.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">

          {/* BIG IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[350px] sm:h-[450px] md:h-[550px]"
          >
            <Image
              src="/images/img1.webp"
              alt="School Building"
              fill
              className="object-fill p-2 rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Excellence in Education Since 1995
            </h3>

            <p className="text-gray-600 mb-8 text-lg">
              Our institution focuses on academic brilliance, character
              development, and real-world skills to shape tomorrow’s leaders.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border-l-4 border-blue-600"
              >
                <h4 className="text-xl font-bold mb-3 text-blue-600">
                  Our Mission
                </h4>
                <p className="text-gray-600 text-sm">
                  Empower students with knowledge and values for lifelong success.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border-l-4 border-purple-600"
              >
                <h4 className="text-xl font-bold mb-3 text-purple-600">
                  Our Vision
                </h4>
                <p className="text-gray-600 text-sm">
                  Become a center of excellence recognized globally.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-8 mt-20 text-center"
        >
          <div className="bg-blue-950 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-4xl font-extrabold text-blue-600">
              <Counter end={1200} />+
            </h3>
            <p className="text-gray-300 mt-2">Students</p>
          </div>

          <div className="bg-blue-950 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-4xl font-extrabold text-purple-600">
              <Counter end={75} />+
            </h3>
            <p className="text-gray-300 mt-2">Teachers</p>
          </div>

          <div className="bg-blue-950 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-4xl font-extrabold text-green-600">
              <Counter end={25} />+
            </h3>
            <p className="text-gray-300 mt-2">Years of Excellence</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}