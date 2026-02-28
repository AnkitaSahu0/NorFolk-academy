"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admissions" className="min-w-3xl py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 HERO HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl text-black md:text-5xl font-extrabold">
            Apply for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admission
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Join a community that inspires excellence, leadership, and
            lifelong learning.
          </p>
        </motion.div>

        {/* 🔥 MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT INFO SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border-l-4 border-blue-600">
              <h3 className="text-2xl text-black font-bold mb-4">Admission Process</h3>
              <ul className="space-y-3 text-gray-600">
                <li>📄 Submit online application</li>
                <li>📚 Entrance assessment</li>
                <li>👨‍👩‍👧 Parent interaction</li>
                <li>🎉 Final confirmation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <p>
                Experienced faculty, modern infrastructure, smart classrooms,
                and holistic development programs.
              </p>
            </div>
          </motion.div>

          {/* 🔥 FORM SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-2xl"
          >
            {submitted ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  🎉 Application Submitted!
                </h3>
                <p className="text-gray-600">
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 ">

                <input
                  type="text"
                  placeholder="Student Name"
                  required
                  className=" w-full p-4 border text-gray-700 border-gray-500 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <input
                  type="email"
                  placeholder="Parent Email"
                  required
                  className="w-full p-4 border text-gray-700 border-gray-500 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <input
                  type="tel"
                  placeholder="Contact Number"
                  required
                  className="w-full p-4 border text-gray-700 border-gray-500 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <select
                  required
                  className="w-full p-4 border text-gray-700 border-gray-500 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                >
                  <option value="">Select Grade</option>
                  <option>Primary</option>
                  <option>Secondary</option>
                  <option>Higher Secondary</option>
                </select>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl font-semibold hover:opacity-90 transition duration-300"
                >
                  Submit Application
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}