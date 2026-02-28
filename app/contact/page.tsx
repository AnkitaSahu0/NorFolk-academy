"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="min-w-3xl py-24 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 HERO HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-black text-4xl md:text-5xl font-extrabold">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for admissions, queries, or
            general information.
          </p>
        </motion.div>

        {/* 🔥 GRID SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* 📍 CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border-l-4 border-blue-600">
              <h3 className="text-gray-600 text-2xl font-bold mb-4">Contact Information</h3>
              <ul className="space-y-4 text-gray-600">
                <li>📍 123 School Road, Your City</li>
                <li>📞 +91 98765 43210</li>
                <li>✉ info@yourschool.com</li>
                <li>🕒 Mon - Sat: 8:00 AM - 4:00 PM</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why Contact Us?</h3>
              <p>
                Our team is always ready to assist you with admissions,
                academic information, and campus visits.
              </p>
            </div>
          </motion.div>

          {/* 📝 CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl shadow-2xl"
          >
            {submitted ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  ✅ Message Sent Successfully!
                </h3>
                <p className="text-gray-600">
                  We will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 border text-gray-700 border-gray-500 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 border text-gray-700 border-gray-500 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full p-4 border text-gray-700 border-gray-500 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl font-semibold hover:opacity-90 transition duration-300"
                >
                  Send Message
                </button>

              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}