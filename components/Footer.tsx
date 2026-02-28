"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="min-w-3xl bg-gray-900 text-gray-300 pt-16 pb-8 mt-20 relative">
      
      {/* 🔥 Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* 🏫 LOGO & ABOUT */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              NorFolk Academy
            </h2>
            <p className="text-sm leading-relaxed">
              Empowering students with knowledge, leadership skills, and
              values for a brighter future.
            </p>
          </div>

          {/* 🔗 QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-white transition">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white transition">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 📞 CONTACT INFO */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li>📍 123 School Road, Your City</li>
              <li>📞 +91 98765 43210</li>
              <li>✉ info@yourschool.com</li>
              <li>🕒 Mon - Sat: 8AM - 4PM</li>
            </ul>
          </div>

          {/* 📱 SOCIAL MEDIA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <Facebook size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-pink-600 transition"
              >
                <Instagram size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-blue-400 transition"
              >
                <Twitter size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

        </div>

        {/* 🔻 Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} NorFolk. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}