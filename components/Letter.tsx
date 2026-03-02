"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Letter() {
  return (
    <motion.section 
      key="letter" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="py-24 px-6 relative z-10 max-w-3xl mx-auto space-y-16 text-slate-800"
    >
      <div className="space-y-6 text-lg leading-relaxed text-center">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="font-display text-4xl md:text-5xl mb-10 italic text-pink-400"
        >
          Happy 19th Birthday, Sayang 🦋
        </motion.h2>
        <p>
          Sembilan belas tahun lalu, dunia dapet seseorang yang luar biasa. Dan entah gimana caranya, sekarang aku yang dapat kesempatan buat jalan bareng kamu di umur ke-19 ini. Kadang aku masih ngerasa ngga percaya.
        </p>
        <p>
          Di tengah hiruk pikuk sekolah, tugas dan proyek yang menumpuk, guru yang sering ngasih target, organisasi yang ngga pernah sepi kesibukan… masih ada kamu.
        </p>
        <p className="font-medium italic text-sky-600">
          Kamu yang selalu bisa bikin semuanya terasa lebih ringan.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2"
      >
        <Image src="/images/letter_1.jpg" alt="Us in school" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Kamu yang tanpa sadar bikin aku ngerasa, “oh ternyata hidup seindah ini ya kalau sama kamu.”
        </p>
        <p>
          Aku inget momen-momen kecil kita. Ketawa receh. Ngambek-ngambekan. Capek bareng. Dan dari semua itu, aku sadar satu hal — <strong>aku nyaman banget sama kamu.</strong> Bukan cuma seneng, tapi nyaman. Dan itu jarang.
        </p>
        <p className="pt-4 text-center italic text-slate-500">
          Di umur 19 ini, aku ngga mau cuma doa yang umum-umum. Aku doa yang spesifik buat kamu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "Semoga kamu makin percaya diri sama kemampuan kamu.",
          "Semoga mimpi-mimpi kamu ngga cuma jadi angan.",
          "Semoga kalau kamu lagi ragu, kamu inget ada aku yang selalu yakin sama kamu."
        ].map((wish, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white shadow-sm text-center text-sm italic"
          >
            {wish}
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white -rotate-2"
      >
        <Image src="/images/letter-2.jpg" alt="Memory" fill className="object-cover" />
      </motion.div>

      <div className="space-y-6 text-lg leading-relaxed text-center">
        <p>Kalau nanti dunia lagi berat, aku mau jadi tempat kamu cerita.</p>
        <p>Kalau kamu lagi ngerasa ngga cukup, aku mau jadi orang pertama yang bilang kamu lebih dari cukup.</p>
        <p>
          Aku ngga janji semuanya bakal selalu mudah. Tapi aku janji, selama kamu masih mau aku di samping kamu, <strong>aku bakal tetap di sini. Ngga setengah-setengah.</strong>
        </p>
      </div>

      <div className="space-y-8 text-lg leading-relaxed text-center pb-20">
        <div className="bg-sky-50 p-8 rounded-[2.5rem] space-y-4">
          <p>Terima kasih ya, udah jadi bagian paling indah di hidupku.</p>
          <p>Di tempat yang penuh tekanan dan target, kamu justru jadi bagian yang paling aku syukuri.</p>
        </div>
        
        <div className="pt-10">
          <p className="text-3xl md:text-4xl font-display italic text-pink-400">
            aku sayang kamu, bukan cuma karena kamu baik atau manis.
          </p>
          <p className="text-2xl font-display italic text-sky-400 mt-2">
            Tapi karena sama kamu, aku ngerasa pulang. 💙
          </p>
        </div>

        <div className="pt-12">
          <p className="font-bold tracking-[0.4em] uppercase text-xs text-slate-400">Selalu,</p>
          <p className="text-2xl font-display mt-2 text-slate-800">Rey.</p>
        </div>
      </div>
    </motion.section>
  );
}