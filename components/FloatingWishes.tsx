"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWishes() {
  const [wishes, setWishes] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newWish = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setWishes((prev) => [...prev, newWish]);
    setTimeout(() => {
      setWishes((prev) => prev.filter((wish) => wish.id !== newWish.id));
    }, 2000);
  };

  return (
    <div 
      onClick={handleClick} 
      className="fixed inset-0 z-30 cursor-heart"
    >
      <AnimatePresence>
        {wishes.map((wish) => (
          <motion.div
            key={wish.id}
            initial={{ opacity: 1, scale: 1, x: wish.x - 12, y: wish.y - 12 }}
            animate={{ opacity: 0, y: wish.y - 100, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute text-2xl pointer-events-none"
          >
            💙
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}