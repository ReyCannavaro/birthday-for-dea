"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CrossWordProps {
  onSuccess: () => void;
}

export default function CrossWord({ onSuccess }: CrossWordProps) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [input, setInput] = useState<string[]>([]);

  const questions = [
    { q: "Kota pertama kali kita ngedate berdua?", a: "MALANG" },
    { q: "Lingkungan pertama kali kita ketemu?", a: "ORGANISASI" },
    { q: "Makanan favorit yang paling sering kita makan berdua", a: "MIAYAM" },
    { q: "Pelajaran favorit Dea tapi bukan pelajaran favorit Rey?", a: "MATEMATIKA" },
    { q: "Guru favorit kita berdua?", a: "BUMIRZA" },
  ];

  useEffect(() => {
    const emptyInput = new Array(questions[currentLevel].a.length).fill("");
    setInput(emptyInput);
  }, [currentLevel]);

  const handleChange = (index: number, value: string) => {
    const newInputs = [...input];
    newInputs[index] = value.toUpperCase();
    setInput(newInputs);

    if (value && index < questions[currentLevel].a.length - 1) {
      document.getElementById(`box-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !input[index] && index > 0) {
      document.getElementById(`box-${index - 1}`)?.focus();
    }
  };

  const check = () => {
    const userAnswer = input.join("");
    if (userAnswer === questions[currentLevel].a) {
      if (currentLevel < questions.length - 1) {
        setCurrentLevel(currentLevel + 1);
      } else {
        onSuccess();
      }
    } else {
      alert("Masih salah nih, coba diingat-ingat lagi ya sayang... 💙");
    }
  };

  return (
    <motion.section 
      key="game" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen flex items-center justify-center p-6 relative z-10"
    >
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentLevel}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          className="bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl max-w-2xl w-full text-center border border-white"
        >
          <div className="mb-6">
            <span className="bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Pertanyaan {currentLevel + 1} dari 5
            </span>
          </div>

          <h2 className="font-display text-2xl md:text-3xl text-slate-800 mb-8 italic">
            "{questions[currentLevel].q}"
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {input.map((char, i) => (
              <input
                key={`${currentLevel}-${i}`} 
                id={`box-${i}`} 
                type="text" 
                maxLength={1} 
                value={char}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="w-8 h-10 md:w-11 md:h-14 border-2 border-sky-100 rounded-lg md:rounded-xl text-center text-lg md:text-2xl font-bold text-slate-700 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 outline-none bg-white transition-all shadow-inner uppercase"
              />
            ))}
          </div>

          <button 
            onClick={check} 
            className="w-full bg-sky-400 text-white py-4 rounded-2xl font-bold shadow-lg shadow-sky-100 hover:bg-sky-500 hover:-translate-y-1 transition-all"
          >
            {currentLevel === questions.length - 1 ? "Buka Surat Terakhir 💌" : "Pertanyaan Selanjutnya 🔍"}
          </button>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}