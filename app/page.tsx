"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/Hero";
import ScrapBook from "@/components/ScrapBook";
import CrossWord from "@/components/CrossWord";
import VirtualCandleBlow from "@/components/VirtualCandleBlow";
import Letter from "@/components/Letter";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import FloatingWishes from "@/components/FloatingWishes";

export default function BirthdayCardDea() {
  const [step, setStep] = useState(0); 
  const [isMounted, setIsMounted] = useState(false);
  const [hearts, setHearts] = useState<{top: string, left: string, delay: number}[]>([]);
  const [rotations, setRotations] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    
    setHearts([...Array(12)].map(() => ({
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      delay: Math.random() * 2
    })));

    setRotations([...Array(20)].map(() => (Math.random() * 6 - 3)));
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-her-light relative font-body overflow-x-hidden antialiased">
      <audio ref={audioRef} src="/music/penjaga-hati.mp3" loop />
      {step >= 1 && <SpotifyPlayer audioRef={audioRef} />}

      <div className="fixed inset-0 z-0 overflow-hidden">
        <Image 
          src="/images/hero-dea.jpg" 
          alt="Background" 
          fill 
          className="object-cover opacity-15 scale-110 blur-[2px]" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-her-light/40 to-her-light" />
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <Hero 
            hearts={hearts} 
            onStart={() => { 
              setStep(1); 
              audioRef.current?.play(); 
            }} 
          />
        )}

        {step === 1 && (
          <ScrapBook 
            rotations={rotations} 
            onNext={() => setStep(2)} 
          />
        )}

        {step === 2 && (
          <CrossWord 
            onSuccess={() => setStep(3)} 
          />
        )} 
        
        {step === 3 && (
          <VirtualCandleBlow 
            onFlamesOut={() => setStep(4)} 
          />
        )} 
        
        {step === 4 && (
          <div className="relative">
            <FloatingWishes />
            <Letter />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}