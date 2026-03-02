"use client";
import { motion, Variants } from "framer-motion";

interface HeroProps {
  onStart: () => void;
  hearts: { top: string; left: string; delay: number }[];
}

export default function Hero({ onStart, hearts }: HeroProps) {
  // Kita tambahkan tipe data "Variants" dari framer-motion biar TypeScript nggak protes
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: "easeOut" } 
    },
  };

  return (
    <motion.section 
      key="hero" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{ 
        opacity: 0, 
        scale: 1.1, 
        filter: "blur(20px)", 
        transition: { duration: 0.8 } 
      }} 
      className="h-screen flex items-center justify-center p-6 relative z-10 overflow-hidden"
    >
      {/* Efek Floating Hearts Background */}
      {hearts.map((style, i) => (
        <motion.div 
          key={`heart-${i}`} // Key yang lebih unik
          initial={{ opacity: 0 }}
          animate={{ y: [0, -60, 0], opacity: [0, 0.4, 0], scale: [1, 1.2, 1] }} 
          transition={{ duration: 5, delay: style.delay, repeat: Infinity }} 
          className="absolute text-2xl text-pink-300/30 pointer-events-none" 
          style={{ top: style.top, left: style.left }}
        >
          🤍
        </motion.div>
      ))}

      <div className="text-center space-y-6 relative z-20">
        <motion.p 
          variants={itemVariants}
          className="text-[10px] tracking-[0.6em] text-sky-600 font-bold uppercase italic opacity-80"
        >
          A Heartfelt Gift For
        </motion.p>

        <motion.h1 
          variants={itemVariants}
          className="font-display text-6xl md:text-8xl text-slate-800 leading-tight"
        >
          Our Sweet <span className="text-pink-300 italic inline-block drop-shadow-sm">Dea</span> 💙
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-sm font-medium italic max-w-xs mx-auto"
        >
          "Sesuatu yang sederhana, khusus buat kamu yang luar biasa."
        </motion.p>

        <motion.div variants={itemVariants} className="pt-6">
          <motion.button 
            onClick={onStart} 
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(240, 249, 255, 0.9)",
              boxShadow: "0 20px 25px -5px rgb(186 230 253 / 0.5)"
            }} 
            whileTap={{ scale: 0.95 }}
            className="bg-white/70 backdrop-blur-md text-sky-500 border border-sky-100 px-14 py-4 rounded-full font-bold shadow-xl shadow-sky-100/50 transition-all duration-300 group"
          >
            <span className="group-hover:tracking-widest transition-all duration-300">Buka Kejutan</span> ✨
          </motion.button>
        </motion.div>
      </div>

      {/* Radial Gradient Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-50/20 via-transparent to-transparent pointer-events-none" />
    </motion.section>
  );
}