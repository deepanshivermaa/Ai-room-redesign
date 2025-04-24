"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const styles = [
  {
    id: "minimalist",
    title: "Minimalist",
    desc: "Clean lines, neutral colors, and uncluttered spaces define minimalist design. It focuses on simplicity and functionality with a serene and calm aesthetic.",
    img: "/min.jpg",
    color: "bg-pink-100 dark:bg-pink-900",
  },
  {
    id: "bohemian",
    title: "Bohemian",
    desc: "Bohemian design features a mix of colors, textures, and patterns with a relaxed and global-inspired vibe. Perfect for those who love creativity and culture.",
    img: "/boho.jpg",
    color: "bg-yellow-100 dark:bg-yellow-900",
  },
  {
    id: "scandinavian",
    title: "Scandinavian",
    desc: "Bright, airy, and functional. Scandinavian style uses natural materials, pale tones, and minimalist decor to create cozy, stylish interiors.",
    img: "/scan.jpg",
    color: "bg-blue-100 dark:bg-blue-900",
  },
  {
    id: "modern",
    title: "Modern",
    desc: "Modern design emphasizes clean lines, neutral palettes, and industrial elements like metal and glass. It creates sleek, efficient spaces with a contemporary vibe.",
    img: "/kitchen.jpg",
    color: "bg-green-100 dark:bg-green-900",
  },
];

export default function StylesPage() {
  const [activeStyleIndex, setActiveStyleIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // Handle style selection from URL hash when the component mounts
  useEffect(() => {
    const hash = window.location.hash.replace("#", ""); // Get the current URL hash
    const activeStyle = styles.findIndex((style) => style.id === hash);
    if (activeStyle !== -1) {
      setActiveStyleIndex(activeStyle);
    }

    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStyleClick = (id) => {
    const index = styles.findIndex((style) => style.id === id);
    setActiveStyleIndex(index);
    window.location.hash = id; // Update URL hash to reflect the selected style
  };

  const selectedStyle = styles[activeStyleIndex];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Explore Design Styles
      </h1>

      {/* Style Navigation */}
      <div className="flex justify-center mb-12 gap-4">
        {styles.map((style) => (
          <button
            key={style.id}
            onClick={() => handleStyleClick(style.id)} // Set the active style based on the clicked style
            className={`px-4 py-2 rounded-full border transition duration-300 font-semibold shadow-md ${
              activeStyleIndex === styles.findIndex((s) => s.id === style.id)
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-transparent"
                : "text-gray-700 dark:text-gray-300 border-gray-400 hover:bg-blue-100 dark:hover:bg-blue-800"
            }`}
          >
            {style.title}
          </button>
        ))}
      </div>

      {/* Display Selected Style */}
      <motion.section
        key={selectedStyle.id}
        id={selectedStyle.id} // This ID will be used for hash navigation
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col-reverse md:flex-row ${
          selectedStyle.id.length % 2 === 0 ? "md:flex-row-reverse" : ""
        } items-center gap-8 p-6 mb-12 rounded-xl ${selectedStyle.color} shadow-xl`}
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative w-full md:w-1/2 h-64 md:h-96 rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={selectedStyle.img}
            alt={selectedStyle.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="md:w-1/2"
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          >
            {selectedStyle.title}
          </motion.h2>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            {selectedStyle.desc}
          </p>
        </motion.div>
      </motion.section>

      {/* Back to Dashboard Button */}
      <div className="mt-6 text-center">
        <Link
          href="/#hero"
          className="inline-block px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-lg hover:scale-105 transition duration-300"
        >
          Back to Dashboard
        </Link>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition duration-300"
        >
          ↑
        </button>
      )}
    </main>
  );
}
