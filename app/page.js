// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center w-full">
//       {/* Hero Section with Background Images */}
//       <section className="relative w-full text-center py-20 overflow-hidden">
//         {/* Background Images */}
//         <div className="absolute inset-0 w-full h-full grid grid-cols-3 md:grid-cols-5">
//           <Image src="/image1.jpg" alt="Image 1" width={250} height={200} className="object-cover w-full h-full" />
//           <Image src="/image2.jpg" alt="Image 2" width={250} height={200} className="object-cover w-full h-full" />
//           <Image src="/image3.jpg" alt="Image 3" width={250} height={200} className="object-cover w-full h-full" />
//           <Image src="/image4.jpg" alt="Image 4" width={250} height={200} className="object-cover w-full h-full" />
//           <Image src="/image5.jpg" alt="Image 5" width={250} height={200} className="object-cover w-full h-full" />
//         </div>

//         {/* Dark Overlay for Better Readability */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Hero Content (Text is now visible) */}
//         <div className="relative z-10 p-8">
//           <h1 className="text-5xl font-bold text-white shadow-lg">
//             AI-Powered Interior Design
//           </h1>
//           <p className="mt-4 text-lg text-gray-300 shadow-md">
//             Transform your space with intelligent design recommendations.
//           </p>
//           <div className="mt-6">
//             <Link
//               href="/dashboard"
//               className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
//             >
//               Get Started →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Transformation Showcase */}
//       <section className="flex flex-col items-center justify-center py-16 w-full px-6 md:px-12">
//         <div className="flex flex-col md:flex-row items-center gap-6">
//           {/* Original Room Image */}
//           <div className="relative w-80 h-60">
//             <Image src="/original-room.jpg" alt="Original Room" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
//           </div>

//           {/* Arrow Indicator */}
//           <div className="text-4xl font-bold text-gray-600">→</div>

//           {/* AI-Designed Room */}
//           <div className="relative w-80 h-60">
//             <Image src="/ai-designed-room.jpg" alt="AI Designed Room" layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 py-12 w-full max-w-6xl">
//         {[
//           { title: "Upload", desc: "Upload Your Room Picture", img: "/upload.png" },
//           { title: "Select Design", desc: "Select Room & Design Style", img: "/design.png" },
//           { title: "Download", desc: "Your Interior Design is Ready", img: "/download.png" },
//           { title: "24/7 Support", desc: "Get Support Anytime", img: "/support.png" },
//         ].map((item, index) => (
//           <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
//             <div className="relative w-16 h-16 mx-auto">
//               <Image src={item.img} alt={item.title} layout="fill" objectFit="contain" className="rounded-lg" />
//             </div>
//             <h3 className="mt-4 text-xl font-semibold text-gray-900">{item.title}</h3>
//             <p className="text-gray-600 mt-2">{item.desc}</p>
//             <Link href="#" className="text-blue-600 mt-4 inline-block">
//               Learn More →
//             </Link>
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// }



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa6";

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center w-full bg-gray-50">
//       <style jsx global>{`
//         html {
//           scroll-behavior: smooth;
//         }
//       `}</style>

//       {/* Header */}
      
//       <header className="w-full px-6 py-3 bg-white shadow-md fixed top-0 z-50">
//         <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
//           <motion.div
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Image src="/d.jpg" alt="Designora Logo" width={140} height={40} />
//           </motion.div>

//           <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium ml-auto">
//             <a href="#hero" className="hover:text-blue-600">Home</a>
//             <a href="#about" className="hover:text-blue-600">About</a>
//             <a href="#how-it-works" className="hover:text-blue-600">How It Works</a> {/* Added How It Works link */}

//             {/* Design Styles */}
//             <div className="relative group">
//               <span className="cursor-pointer flex items-center hover:text-blue-600">
//                 Design Styles <FaChevronDown className="ml-1 text-sm" />
//               </span>
//               <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
//               <Link href="/styles#minimalist" className="block px-4 py-2 hover:bg-gray-100">Minimalist</Link>
//               <Link href="/styles#bohemian" className="block px-4 py-2 hover:bg-gray-100">Bohemian</Link>
//               <Link href="/styles#scandinavian" className="block px-4 py-2 hover:bg-gray-100">Scandinavian</Link>
//               <Link href="/styles#modern" className="block px-4 py-2 hover:bg-gray-100">Modern</Link>

//               </div>
//             </div>

//             {/* Contact Us */}
//             <div className="relative group">
//               <span className="cursor-pointer flex items-center hover:text-blue-600">
//                 Contact Us <FaChevronDown className="ml-1 text-sm" />
//               </span>
//               <div className="absolute left-0 mt-2 w-52 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
//                 <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">Contact Section</a>
//                 <a href="mailto:support@designora.com" className="block px-4 py-2 hover:bg-gray-100">Email: support@designora.com</a>
//                 <a href="tel:+1234567890" className="block px-4 py-2 hover:bg-gray-100">Call: +1 (234) 567-890</a>
//               </div>
//             </div>

//             {/* Language */}
//             <div className="relative group">
//               <span className="cursor-pointer flex items-center hover:text-blue-600">
//                 EN / US <FaChevronDown className="ml-1 text-sm" />
//               </span>
//               <div className="absolute left-0 mt-2 w-36 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
//                 <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">EN / US</button>
//                 <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">ES / MX</button>
//                 <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">FR / FR</button>
//               </div>
//             </div>
//           </nav>

//           <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 ml-10">
//             Get Started
//           </Link>
//         </div>
//       </header>

//       <div className="h-20" />

//       {/* Hero */}
//       <section id="hero" className="relative w-full text-center py-20 overflow-hidden">
//         <div className="absolute inset-0 w-full h-full grid grid-cols-3 md:grid-cols-5">
//           {[1, 2, 3, 4, 5].map(i => (
//             <Image key={i} src={`/image${i}.jpg`} alt={`Image ${i}`} width={250} height={200} className="object-cover w-full h-full" />
//           ))}
//         </div>
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 p-8">
//           <motion.h1 initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-white text-6xl font-extrabold drop-shadow-lg">Designora</motion.h1>
//           <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl font-bold text-white mt-4">AI-Powered Interior Design</motion.h2>
//           <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
//             Transform your space with intelligent design recommendations powered by AI.
//           </motion.p>
//           <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2 }} className="mt-6">
//             <Link href="/dashboard" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
//               Redesign My Room →
//             </Link>
//           </motion.div>
          
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="px-6 py-20 w-full max-w-7xl">
//         <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Our AI-Powered Interior Design</h2>
//         <div className="flex flex-col md:flex-row items-center gap-10">
//           <motion.div
//             initial={{ x: '100%', opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="md:w-1/2"
//           >
//             <Image src="/about.jpg" alt="AI Interior Design" width={500} height={150} className="rounded-lg shadow-xl" />
//           </motion.div>
//           <motion.div
//             initial={{ x: '-100%', opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="md:w-1/2 text-center md:text-left"
//           >
//             <p className="text-lg text-gray-700 leading-relaxed">
//               Our AI-powered interior design platform revolutionizes the way you redesign your living spaces. With cutting-edge algorithms, Designora analyzes your room, understands your style preferences, and transforms your space in ways you never imagined. Whether you're aiming for a minimalist, modern, or bohemian look, our AI brings your vision to life with just a few clicks.
//             </p>
//           </motion.div>
//         </div>
//       </section>


//       {/* How It Works */}
//       <section id="how-it-works" className="px-6 py-20 w-full max-w-7xl">
//         <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">How It Works?</h2>
//         <div className="space-y-24">
//           {[
//             {
//               title: "Step 1: Upload Your Room",
//               desc: "Take a photo of your room from your smartphone or upload an existing image. Our smart AI detects room elements like furniture, lighting, and layout instantly — so you don't have to do any measuring or editing manually.",
//               img: "/mess.jpg",
//               flip: false,
//             },
//             {
//               title: "Step 2: Choose Your Style",
//               desc: "Browse through a variety of curated design themes such as Modern, Bohemian, Scandinavian, and more. Once you pick your preferred style, our AI gets to work blending your room’s layout with your chosen vibe seamlessly.",
//               img: "/Design.jpg",
//               flip: true,
//             },
//             {
//               title: "Step 3: Get Your AI Redesign",
//               desc: "Within seconds, receive a high-resolution redesigned version of your room. You can preview different styles, make quick tweaks, and even share or download your transformation. It’s that easy!",
//               img: "/final.jpg",
//               flip: false,
//             },
//           ].map((step, index) => (
//             <motion.div
//               key={index}
//               className={`flex flex-col md:flex-row ${step.flip ? "md:flex-row-reverse" : ""} items-center gap-10`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <div className="relative w-full md:w-1/2 h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
//                 <Image
//                   src={step.img}
//                   alt={step.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-xl"
//                 />
//               </div>
//               <div className="md:w-1/2">
//                 <h3 className="text-2xl font-bold text-blue-700 mb-4">{step.title}</h3>
//                 <p className="text-gray-700 text-lg leading-relaxed">{step.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Features */}
//       <section className="px-6 py-16 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
//         {[
//           {
//             title: "Smart AI Redesign",
//             desc: "Leverage cutting-edge AI to analyze your room layout, lighting, and aesthetics — delivering smart, personalized redesign suggestions tailored to your space.",
//             img: "/smartai.jpg",
//           },
//           {
//             title: "Real-Time Preview",
//             desc: "Visualize your redesigned space instantly with our real-time rendering engine — see changes live as you select styles, layouts, and colors.",
//             img: "/realtime.jpg",
//           },
//           {
//             title: "Style Library",
//             desc: "Explore a curated library of design styles including Modern, Scandinavian, Boho, and more — pick the vibe that fits your vision with ease.",
//             img: "/stylelib.jpg",
//           },
//           {
//             title: "Mobile Dashboard",
//             desc: "Access your room redesigns, preferences, and previews on the go — our mobile-optimized dashboard keeps your creativity connected anytime, anywhere.",
//             img: "/mobiled.jpg",
//           },
//         ].map((item, index) => (
//           <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="flex items-start space-x-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
//             <div className="relative w-16 h-16 flex-shrink-0">
//               <Image src={item.img} alt={item.title} layout="fill" objectFit="contain" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
//               <p className="text-gray-600 mt-2">{item.desc}</p>
//             </div>
//           </motion.div>
//         ))}
//       </section>
      
//       {/* Contact */}
//       <motion.section id="contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full bg-blue-50 py-16 px-8 text-center">
//         <h2 className="text-3xl font-bold text-blue-700 mb-4">Let’s Transform Your Room</h2>
//         <p className="text-gray-700 max-w-xl mx-auto mb-8">
//           Whether you're a homeowner, renter, or just love interiors — we’re here to turn your vision into reality.
//         </p>
//         <div className="flex flex-col md:flex-row justify-center gap-4">
//           <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700">Contact Us</a>
//           <a href="mailto:support@designora.com" className="text-blue-600 underline text-lg hover:text-blue-800">support@designora.com</a>
//         </div>
//       </motion.section>

//       {/* Newsletter */}
//       <section className="w-full bg-white py-12 px-6 text-center border-t">
//         <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Inspired with Our Newsletter</h3>
//         <p className="text-gray-600 mb-6">Subscribe to receive the latest interior design trends, tips, and Designora updates straight to your inbox.</p>
//         <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
//           <input type="email" placeholder="Enter your email" className="px-4 py-3 border border-gray-300 rounded-md w-full" required />
//           <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">Subscribe</button>
//         </form>
//       </section>

//         {/* Footer */}
//         <footer className="bg-white w-full py-6 border-t text-gray-600">
//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//     {/* Left: Branding */}
//     <p className="text-lg font-semibold text-gray-900">Designora – AI Interior Design</p>

//     {/* Center: Email */}
//     <p className="text-sm text-center md:absolute left-1/2 transform -translate-x-1/2">
//       Email: support@designora.com
//     </p>

//     {/* Right: Social Icons */}
//     <div className="flex gap-6 text-2xl">
//       <a href="https://instagram.com/designora" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//         <FaInstagram style={{ color: '#E4405F' }} />
//       </a>
//       <a href="https://linkedin.com/company/designora" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//         <FaLinkedin style={{ color: '#0077B5' }} />
//       </a>
//     </div>
//   </div>

//   {/* Bottom: Copyright */}
//   <p className="text-sm text-center mt-4">
//     © {new Date().getFullYear()} Designora. All rights reserved.
//   </p>
// </footer>

//     </main>
//   );
// }




"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-gray-50">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Header */}
     <header className="w-full fixed top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo - left aligned */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src="/d.jpg" alt="Designora Logo" width={150} height={50} className="rounded-lg" />
    </motion.div>

    {/* Nav & CTA - right aligned */}
    <div className="flex items-center ml-auto space-x-8">
      <nav className="hidden md:flex space-x-8 items-center text-gray-700 font-semibold text-base">
        <a href="#hero" className="hover:text-indigo-600 transition">Home</a>
        <a href="#about" className="hover:text-indigo-600 transition">About</a>
        <a href="#how-it-works" className="hover:text-indigo-600 transition">How It Works</a>

        {/* Dropdown: Design Styles */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-indigo-600 transition">
            Design Styles <FaChevronDown className="text-xs" />
          </button>
          <div className="absolute left-0 mt-3 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <Link href="/styles#minimalist" className="block px-4 py-2 hover:bg-gray-100">Minimalist</Link>
            <Link href="/styles#bohemian" className="block px-4 py-2 hover:bg-gray-100">Bohemian</Link>
            <Link href="/styles#scandinavian" className="block px-4 py-2 hover:bg-gray-100">Scandinavian</Link>
            <Link href="/styles#modern" className="block px-4 py-2 hover:bg-gray-100">Modern</Link>
          </div>
        </div>

        {/* Dropdown: Contact */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-indigo-600 transition">
            Contact Us <FaChevronDown className="text-xs" />
          </button>
          <div className="absolute left-0 mt-3 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">Contact Section</a>
            <a href="mailto:support@designora.com" className="block px-4 py-2 hover:bg-gray-100">Email: support@designora.com</a>
            <a href="tel:+1234567890" className="block px-4 py-2 hover:bg-gray-100">Call: +1 (234) 567-890</a>
          </div>
        </div>
      </nav>

      {/* CTA Button */}
      <Link
        href="/dashboard"
        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300"
      >
        Get Started
      </Link>
    </div>
  </div>
</header>



      <div className="h-20" />

      {/* Hero */}
      <section id="hero" className="relative w-full text-center py-20 overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="absolute inset-0 w-full h-full grid grid-cols-3 md:grid-cols-5">
          {[1, 2, 3, 4, 5].map(i => (
            <Image key={i} src={`/image${i}.jpg`} alt={`Image ${i}`} width={250} height={200} className="object-cover w-full h-full" />
          ))}
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-8">
          <motion.h1 initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-white text-6xl font-extrabold drop-shadow-lg">Designora</motion.h1>
          <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl font-bold text-white mt-4">AI-Powered Interior Design</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Transform your space with intelligent design recommendations powered by AI.
          </motion.p>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2 }} className="mt-6">
            <Link href="/dashboard" className="px-6 py-3 bg-purple-500 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-pink-400 transition">
              Redesign My Room →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Our AI-Powered Interior Design</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <Image src="/about.jpg" alt="AI Interior Design" width={500} height={150} className="rounded-lg shadow-xl" />
          </motion.div>
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Our AI-powered interior design platform revolutionizes the way you redesign your living spaces. With cutting-edge algorithms, Designora analyzes your room, understands your style preferences, and transforms your space in ways you never imagined. Whether you're aiming for a minimalist, modern, or bohemian look, our AI brings your vision to life with just a few clicks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-20 w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">How It Works?</h2>
        <div className="space-y-24">
          {[ 
            {
              title: "Step 1: Upload Your Room",
              desc: "Take a photo of your room from your smartphone or upload an existing image. Our smart AI detects room elements like furniture, lighting, and layout instantly — so you don't have to do any measuring or editing manually.",
              img: "/mess.jpg",
              flip: false,
            },
            {
              title: "Step 2: Choose Your Style",
              desc: "Browse through a variety of curated design themes such as Modern, Bohemian, Scandinavian, and more. Once you pick your preferred style, our AI gets to work blending your room’s layout with your chosen vibe seamlessly.",
              img: "/Design.jpg",
              flip: true,
            },
            {
              title: "Step 3: Get Your AI Redesign",
              desc: "Within seconds, receive a high-resolution redesigned version of your room. You can preview different styles, make quick tweaks, and even share or download your transformation. It’s that easy!",
              img: "/final.jpg",
              flip: false,
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${step.flip ? "md:flex-row-reverse" : ""} items-center gap-10`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative w-full md:w-1/2 h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={step.img}
                  alt={step.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">{step.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {[ 
          {
            title: "Smart AI Redesign",
            desc: "Leverage cutting-edge AI to analyze your room layout, lighting, and aesthetics — delivering smart, personalized redesign suggestions tailored to your space.",
            img: "/smartai.jpg",
          },
          {
            title: "Real-Time Preview",
            desc: "Visualize your redesigned space instantly with our real-time rendering engine — see changes live as you select styles, layouts, and colors.",
            img: "/realtime.jpg",
          },
          {
            title: "Style Library",
            desc: "Explore a curated library of design styles including Modern, Scandinavian, Boho, and more — pick the vibe that fits your vision with ease.",
            img: "/stylelib.jpg",
          },
          {
            title: "Mobile Dashboard",
            desc: "Access your room redesigns, preferences, and previews on the go — our mobile-optimized dashboard keeps your creativity connected anytime, anywhere.",
            img: "/mobiled.jpg",
          },
        ].map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }} className="flex items-start space-x-4 bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src={item.img} alt={item.title} layout="fill" objectFit="contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>
      
      {/* Contact */}
      <motion.section id="contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="w-full bg-blue-50 py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Let’s Transform Your Room</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Whether you're a homeowner, renter, or just love interiors — we’re here to turn your vision into reality.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700">Contact Us</a>
          <a href="mailto:support@designora.com" className="text-blue-600 underline text-lg hover:text-blue-800">support@designora.com</a>
        </div>
      </motion.section>

      {/* Newsletter */}
      <section className="w-full bg-white py-12 px-6 text-center border-t">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Stay Inspired with Our Newsletter</h3>
        <p className="text-gray-600 mb-6">Subscribe to receive the latest interior design tips, trends, and updates from Designora.</p>
        <form className="max-w-lg mx-auto">
          <input type="email" placeholder="Your Email" className="px-4 py-3 w-full md:w-80 rounded-lg border border-gray-300 shadow-md" />
          <button type="submit" className="mt-4 px-6 py-3 w-full md:w-80 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </form>
      </section>
            {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <div className="mb-6 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image src="/d.jpg" alt="Designora Logo" width={140} height={40} />
            </motion.div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-gray-400 hover:text-yellow-400">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-yellow-400">About</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-yellow-400">How It Works</a></li>
                <li><a href="/styles" className="text-gray-400 hover:text-yellow-400">Design Styles</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-yellow-400">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex items-center gap-6 mt-3">
                <a href="https://www.instagram.com/designora" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl text-gray-400 hover:text-yellow-400" />
                </a>
                <a href="https://www.linkedin.com/company/designora" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl text-gray-400 hover:text-yellow-400" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <p className="text-gray-400 mt-2">Email: <a href="mailto:support@designora.com" className="hover:text-yellow-400">support@designora.com</a></p>
              <p className="text-gray-400 mt-2">Call: <a href="tel:+1234567890" className="hover:text-yellow-400">+1 (234) 567-890</a></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2025 Designora. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
