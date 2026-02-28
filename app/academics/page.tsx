"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Microscope, Palette } from "lucide-react";

const programs = [
  {
    title: "Primary Education",
    icon: BookOpen,
    desc: "Strong foundational learning with creativity and activity-based curriculum.",
  },
  {
    title: "Secondary Education",
    icon: Users,
    desc: "Comprehensive academic preparation with leadership and life skills.",
  },
  {
    title: "Science & Labs",
    icon: Microscope,
    desc: "Advanced laboratories for practical scientific exploration.",
  },
  {
    title: "Arts & Activities",
    icon: Palette,
    desc: "Music, dance, sports and creative arts for holistic growth.",
  },
];

export default function AcademicsPage() {
  return (
    <section id="academics" className=" py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl text-black md:text-5xl font-extrabold">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Academics
            </span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            We provide a structured and innovative academic system designed to
            nurture knowledge, creativity, and leadership.
          </p>
        </motion.div>

        {/* 🔥 Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl text-black font-bold text-center mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 text-sm text-center">
                  {program.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* 🔥 Extra Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Excellence Beyond Classrooms
          </h3>
          <p className="max-w-2xl mx-auto text-lg">
            Our curriculum blends academic rigor with extracurricular
            activities to ensure balanced development and real-world readiness.
          </p>
        </motion.div>

      </div>
    </section>
  );
}