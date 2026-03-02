"use client";
import { motion, Variants } from "framer-motion";
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

  const sectionVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1, 
        ease: "easeOut",
        staggerChildren: 0.15
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.5 } 
    }
  };

  const photoVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <motion.section 
      key="scrapbook" 
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-24 px-6 relative z-10 max-w-7xl mx-auto"
    >
      <motion.div 
        variants={photoVariants}
        className="text-center mb-20 space-y-3"
      >
        <h2 className="font-display text-5xl md:text-6xl text-slate-800 italic tracking-tight">Our Tiny Moments</h2>
        <p className="text-slate-500 font-medium italic">Beberapa alasan kenapa hari-hariku lebih indah sama kamu.</p>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
        {photos.map((photo, index) => (
          <motion.div 
            key={`photo-${index}`} 
            variants={photoVariants}
            whileHover={{ 
              y: -15, 
              rotate: (rotations[index] || 0) * 2.5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }} 
            viewport={{ once: true, margin: "-50px" }}
            className="break-inside-avoid bg-white p-4 shadow-2xl shadow-sky-100/50 border border-white relative inline-block w-full group" 
            style={{ rotate: `${rotations[index] || 0}deg` }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-sky-100/40 backdrop-blur-[2px] border border-white/50 z-20 shadow-sm" style={{ rotate: "2deg" }} />
            
            <div className="relative aspect-[4/5] overflow-hidden mb-4 rounded-sm bg-slate-50">
              <Image 
                src={photo.src} 
                alt="Memories" 
                fill 
                className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100" 
              />
            </div>
            <p className="font-display text-center text-slate-600 italic text-sm tracking-wide">{photo.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        variants={photoVariants}
        className="text-center mt-32"
      >
        <motion.button 
          onClick={onNext} 
          whileHover={{ scale: 1.1, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }} 
          whileTap={{ scale: 0.9 }}
          className="bg-slate-800 text-white px-12 py-4 rounded-full font-bold shadow-2xl shadow-slate-200 transition-all"
        >
          Ada satu lagi... 💌
        </motion.button>
      </motion.div>
    </motion.section>
  );
}