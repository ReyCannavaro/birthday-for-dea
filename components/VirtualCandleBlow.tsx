"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

interface VirtualCandleBlowProps {
  onFlamesOut: () => void;
}

export default function VirtualCandleBlow({ onFlamesOut }: VirtualCandleBlowProps) {
  const [isLit, setIsLit] = useState(true);

  const fireConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const handleBlow = () => {
    setIsLit(false);
    fireConfetti();
    setTimeout(() => {
      onFlamesOut();
    }, 4000);
  };

  return (
    <motion.section
      key="candle"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10 text-center"
    >
      <AnimatePresence mode="wait">
        {isLit ? (
          <motion.div
            key="lit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="space-y-10"
          >
            <h2 className="font-display text-4xl md:text-5xl text-slate-800 italic">
              Make a wish, Dea... 🎂
            </h2>
            
            <div className="relative w-16 h-40 mx-auto group">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-32 bg-pink-200 rounded-t-lg shadow-inner border-b-4 border-pink-300" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1 h-4 bg-slate-600" />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1.1, 1.3, 1],
                  rotate: [0, 5, -5, 3, 0],
                  opacity: [0.9, 1, 0.8, 1],
                }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-12 bg-gradient-to-t from-orange-600 via-orange-400 to-yellow-200 rounded-full blur-[1px] shadow-[0_0_20px_rgba(251,146,60,0.8)]"
              />
            </div>

            <p className="text-slate-500 font-medium animate-pulse">Klik lilinnya untuk tiup yaa! 🌬️</p>
            
            <button 
              onClick={handleBlow} 
              className="absolute inset-0 w-full h-full cursor-pointer z-20"
              aria-label="Blow Candle"
            />
          </motion.div>
        ) : (
          <motion.div
            key="out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ y: -100, opacity: [0, 0.8, 0], x: [0, 20, -20, 0] }}
              transition={{ duration: 3 }}
              className="w-2 h-2 bg-slate-300 rounded-full blur-sm mx-auto"
            />
            <h1 className="font-display text-6xl md:text-8xl text-slate-800 leading-tight">
              Yay! <span className="text-pink-400 italic">Happy Birthday</span> 🥳
            </h1>
            <p className="text-sky-500 font-bold text-xl tracking-widest uppercase italic">You are so loved, Dea!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}