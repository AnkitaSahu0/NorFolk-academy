"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const eventsData = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "March 25, 2026",
    category: "Sports",
    image:  "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
  },
  {
    id: 2,
    title: "Science Exhibition",
    date: "April 10, 2026",
    category: "Academic",
    image:  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
  },
  {
    id: 3,
    title: "Cultural Fest",
    date: "May 5, 2026",
    category: "Cultural",
    image:   "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting",
    date: "March 30, 2026",
    category: "Academic",
    image:"https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800",
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All"
      ? eventsData
      : eventsData.filter((event) => event.category === filter);

  return (
    <section id="events" className="  py-24 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-black text-4xl md:text-5xl font-extrabold">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Discover exciting activities and celebrations happening at our school.
          </p>
        </motion.div>

        {/* 🎯 FILTER BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {["All", "Sports", "Academic", "Cultural"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-white text-gray-600 shadow hover:shadow-lg"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 📅 EVENTS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 p-2 object-fill group-hover:scale-110 transition duration-500"
                />
                <div className=" absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {event.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-black text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">📅 {event.date}</p>
                <button className="mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}