"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    id: 1,
    category: "Events",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
  },
  {
    id: 2,
    category: "Campus",
    src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a"
  },
  {
    id: 3,
    category: "Sports",
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b"
  },
  {
    id: 4,
    category: "Events",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94"
  },
  {
    id: 5,
    category: "Campus",
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350"
  },
  {
    id: 6,
    category: "Sports",
    src: "https://images.unsplash.com/photo-1508606572321-901ea443707f"
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className=" py-24 bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 BOLD HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-black md:text-5xl font-extrabold">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Explore our vibrant campus life and achievements.
          </p>
        </motion.div>

        {/* 🎯 FILTER BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {["All", "Events", "Campus", "Sports"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-white text-gray-700 shadow hover:shadow-lg"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🖼 IMAGE GRID */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-3xl shadow-xl cursor-pointer group"
              onClick={() => setSelectedImage(img.src)}
            >
              <img
                src={img.src}
                alt="gallery"
                className="w-full h-64 p-2 object-fill transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-bold text-lg tracking-wide">
                  View Image
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔍 MODAL VIEW */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="preview"
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.7 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}