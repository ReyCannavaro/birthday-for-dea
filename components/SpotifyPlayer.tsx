"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Play, Pause } from "lucide-react";

interface SpotifyPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export default function SpotifyPlayer({ audioRef }: SpotifyPlayerProps) {
  const [currentLyric, setCurrentLyric] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

const lyrics = [
    { time: 0, text: "🎵 Penjaga Hati - Nadhif Basalamah" },
    { time: 13, text: "Tak sadar ku temukan..." },
    { time: 17, text: "Temukan wanita rupawan yang sadarkan..." },
    { time: 24, text: "Dia seorang tiada lain tiada bukan..." },
    { time: 31, text: "Hanya dia... 💙" },
    { time: 39, text: "Dia buatku nyaman..." },
    { time: 44, text: "Dalam hangat pelukan..." },
    { time: 49, text: "Dia perasa yang mengerti yang kurasa..." },
    { time: 54, text: "Hanya dia..." },
    { time: 58, text: "Kan ku arungi tujuh laut samudra..." },
    { time: 64, text: "Kan ku daki pegunungan Himalaya..." },
    { time: 70, text: "Apapun kan ku lakukan tuk dirimu sayang..." },
    { time: 77, text: "Oh penjaga hati... ✨" },
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateStatus = () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      setProgress((currentTime / duration) * 100);

      const activeLyric = lyrics
        .filter((l) => l.time <= currentTime)
        .pop();
      if (activeLyric && activeLyric.text !== currentLyric) {
        setCurrentLyric(activeLyric.text);
      }
      setIsPlaying(!audio.paused);
    };

    audio.addEventListener("timeupdate", updateStatus);
    return () => audio.removeEventListener("timeupdate", updateStatus);
  }, [currentLyric, audioRef]);

  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed bottom-6 right-6 z-[100] w-64 md:w-80 bg-white/80 backdrop-blur-lg border border-white shadow-2xl rounded-2xl p-4 overflow-hidden"
    >
      <div className="flex items-center gap-4">
        <motion.div 
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-700 shadow-lg"
        >
          <Music size={20} className="text-white opacity-80" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-1">Now Playing</p>
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentLyric}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-slate-700 text-xs font-medium truncate italic"
            >
              {currentLyric}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 w-full h-1 bg-slate-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-sky-400" 
          animate={{ width: `${progress}%` }} 
          transition={{ ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}