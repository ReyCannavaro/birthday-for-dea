"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ScrapBookProps {
  onNext: () => void;
  rotations: number[];
}

export default function ScrapBook({ onNext, rotations }: ScrapBookProps) {
  const photos = [
    { src: "/images/scr-1.jpg", text: "Si paling gemes 🦋" },
    { src: "/images/scr-2.jpg", text: "Favorite view" },
    { src: "/images/scr-3.jpg", text: "Happiness looks like this" },
    { src: "/images/scr-4.jpg", text: "Core memory #1" },
    { src: "/images/scr-5.jpg", text: "Random day with you" },
    { src: "/images/scr-6.jpg", text: "Beautiful soul" },
    { src: "/images/scr-7.jpg", text: "Keep shining, Dea!" },
    { src: "/images/scr-8.jpg", text: "Endless love 💙" },
    { src: "/images/scr-9.jpg", text: "Senyum favorit aku 😊" },
    { src: "/images/scr-10.jpg", text: "The girl who stole my heart" },
    { src: "/images/scr-11.jpg", text: "Every day is a gift with you" },
    { src: "/images/scr-12.jpg", text: "Thank you for being you" },
    { src: "/images/scr-13.jpg", text: "My lucky charm 🍀" },
    { src: "/images/scr-14.jpg", text: "Definisi bahagia itu denganmu" },
    { src: "/images/scr-15.jpg", text: "Another year with my fav human" },
    { src: "/images/scr-16.jpg", text: "Something I'm proud of 🚀" },
  ];

  return (
    <motion.section 
      key="scrapbook" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="py-24 px-6 relative z-10 max-w-7xl mx-auto"
    >
      <div className="text-center mb-20 space-y-3">
        <h2 className="font-display text-5xl md:text-6xl text-slate-800 italic">Our Tiny Moments</h2>
        <p className="text-slate-500 font-medium italic">Beberapa alasan kenapa hari-hariku lebih indah sama kamu.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
        {photos.map((photo, index) => (
          <motion.div 
            key={index} 
            whileHover={{ y: -10, rotate: (rotations[index] || 0) * 2 }} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (index % 4) * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid bg-white p-4 shadow-2xl shadow-sky-100 border border-white relative inline-block w-full group" 
            style={{ rotate: `${rotations[index] || 0}deg` }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-sky-100/60 backdrop-blur-sm border border-white/50 z-20" style={{ rotate: "2deg" }} />
            
            <div className="relative aspect-[4/5] overflow-hidden mb-4 rounded-sm">
              <Image 
                src={photo.src} 
                alt="Memories" 
                fill 
                className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <p className="font-display text-center text-slate-600 italic text-sm">{photo.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-32">
        <motion.button 
          onClick={onNext} 
          whileHover={{ scale: 1.1 }} 
          className="bg-slate-800 text-white px-12 py-4 rounded-full font-bold shadow-2xl"
        >
          Ada satu lagi... 💌
        </motion.button>
      </div>
    </motion.section>
  );
}