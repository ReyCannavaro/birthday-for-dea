"use client";
import { motion } from "framer-motion";

interface HeroProps {
  onStart: () => void;
  hearts: { top: string; left: string; delay: number }[];
}

export default function Hero({ onStart, hearts }: HeroProps) {
  return (
    <motion.section 
      key="hero" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="h-screen flex items-center justify-center p-6 relative z-10"
    >
      {hearts.map((style, i) => (
        <motion.div 
          key={i} 
          animate={{ y: [0, -40, 0], opacity: [0, 0.5, 0] }} 
          transition={{ duration: 4, delay: style.delay, repeat: Infinity }} 
          className="absolute text-2xl text-pink-300/40 pointer-events-none" 
          style={{ top: style.top, left: style.left }}
        >
          🤍
        </motion.div>
      ))}
      <div className="text-center space-y-4">
        <p className="text-[10px] tracking-[0.5em] text-sky-600 font-bold uppercase italic">A Heartfelt Gift For</p>
        <h1 className="font-display text-6xl md:text-8xl text-slate-800 leading-tight">
          Our Sweet <span className="text-pink-300 italic">Dea</span> 💙
        </h1>
        <motion.button 
          onClick={onStart} 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-white/80 backdrop-blur-md text-sky-500 border border-sky-100 px-12 py-4 rounded-full font-bold shadow-xl shadow-sky-100 hover:bg-sky-50 transition-all"
        >
          Buka Kejutan ✨
        </motion.button>
      </div>
    </motion.section>
  );
}