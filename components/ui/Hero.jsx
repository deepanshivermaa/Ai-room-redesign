"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
  ];

  return (
    <main className="relative flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <section className="relative w-full text-center bg-gray-100 py-20 overflow-hidden">
        {/* Floating Images */}
        {images.map((src, index) => (
          <FloatingImage key={index} src={src} />
        ))}

        {/* Hero Content */}
        <h1 className="text-5xl font-bold text-gray-900 relative z-10">
          AI-Powered Interior Design
        </h1>
        <p className="mt-4 text-lg text-gray-600 relative z-10">
          Transform your space with intelligent design recommendations.
        </p>
        <div className="mt-6 relative z-10">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Get Started →
          </Link>
        </div>
      </section>
    </main>
  );
}

// Floating Image Component with Debugging
function FloatingImage({ src }) {
  const [position, setPosition] = useState({
    top: Math.random() * 80 + "%",
    left: Math.random() * 80 + "%",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        top: Math.random() * 80 + "%",
        left: Math.random() * 80 + "%",
      });
    }, 5000); // Move every 5 seconds

    return () => clearInterval(interval);
  }, []);

  console.log("Rendering image:", src); // Debugging

  return (
    <Image
      src={src}
      alt="Floating"
      width={80}
      height={80}
      className="absolute opacity-50 animate-float"
      style={{
        top: position.top,
        left: position.left,
        transition: "all 5s ease-in-out",
      }}
      onError={() => console.error(`Failed to load image: ${src}`)} // Debugging
    />
  );
}
