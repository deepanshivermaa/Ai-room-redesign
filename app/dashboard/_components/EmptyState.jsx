// import React from 'react';
// import Image from 'next/image'; // ✅ Import next/image
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// function EmptyState() {
//   return (
//     <div className='flex items-center justify-center mt-10 flex-col'>
//       <Image 
//         src="/image.png" // ✅ Ensure this file is inside the public folder
//         width={200} 
//         height={200} 
//         alt="Empty State Image" // ✅ Add an alt attribute for accessibility
//       />
//       <h2 className='font-medium text-lg text-gray-500'>Create New AI Interior Design for your room</h2>
//       <Link href={'/dashboard/create-new'}>
//         <Button className="mt-5">+ Redesign Room</Button>
//       </Link>
//     </div>
//   );
// }

// export default EmptyState;


import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft } from 'lucide-react';

function EmptyState() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Gradient Bubbles */}
      <div className="absolute top-[-80px] left-[-60px] w-[200px] h-[200px] bg-pink-300 opacity-30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[300px] h-[300px] bg-cyan-300 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute top-[20%] left-[50%] w-[160px] h-[160px] bg-purple-300 opacity-20 rounded-full blur-2xl z-0 transform -translate-x-1/2" />

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center mt-20 px-6 py-12 bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl max-w-2xl mx-auto border border-gray-100 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Glowing Image Container */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative rounded-xl p-2 bg-gradient-to-br from-pink-300/40 to-cyan-300/40 shadow-lg"
        >
          <Image 
            src="/new.jpg"
            width={160} 
            height={160} 
            alt="Empty State Image" 
            className="rounded-xl"
          />
        </motion.div>

        {/* Gradient Heading */}
        <motion.h1 
          className="text-3xl font-bold bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 bg-clip-text text-transparent mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          No Designs Yet
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          className="text-gray-600 mt-3 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Ready to transform your space? Start by uploading your room, pick a design style, and let our AI work its magic.
        </motion.p>

        {/* Redesign CTA */}
        <Link href="/dashboard/create-new">
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <Button className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 hover:brightness-110 text-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-2 transition duration-300">
              <Sparkles size={18} /> Redesign Your Room
            </Button>
          </motion.div>
        </Link>

        {/* Divider */}
        <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6" />

        {/* Tips Section */}
        <motion.div 
          className="text-sm text-gray-500 space-y-2 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>✨ Tip: Use natural lighting in your photo for best results.</p>
          <p>🎨 Choose different themes to discover your ideal aesthetic.</p>
        </motion.div>

        {/* Back Button */}
        <Link href="/#hero">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Button variant="outline" className="flex items-center gap-2 border-gray-300 text-gray-600 hover:bg-gray-100 transition">
              <ArrowLeft size={18} /> Back to Dashboard
            </Button>
          </motion.div>
        </Link>

        {/* Footer Note */}
        <motion.div
          className="text-xs text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Powered by <span className="text-fuchsia-500 font-semibold">Designora</span>’s AI Interior Engine ✨
        </motion.div>
      </motion.div>
    </div>
  );
}

export default EmptyState;
