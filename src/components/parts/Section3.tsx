import { playball } from "@/app/fonts"
import Image from "next/image"
import Section4 from "./Section4"
import { CountDown } from ".."
import { motion } from "framer-motion"

export default function Section3() {
  return (
    <div className="flex w-full justify-center">
      {/* Container Utama Mobile (Maksimal lebar 430px) dengan background asli Anda */}
      <div className="relative flex w-full max-w-[430px] flex-col overflow-hidden bg-[#fdf2de] py-12 shadow-2xl">
        {/* Animasi Kartu Kutipan Ayat */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10 flex w-full justify-center text-[#a76226]"
        >
          {/* Ditambahkan 'overflow-hidden' agar ornamen gambar tidak meluber dari border rounded-3xl
           */}
          <div className="relative flex w-[85%] flex-col gap-5 overflow-hidden rounded-3xl bg-transparent px-5 py-10 text-center text-xs shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            {/* Ornamen Atas Kartu (z-0 agar di bawah teks) */}
            <Image
              className="absolute top-0 left-0 z-0 opacity-30"
              src="/assets/card-top.webp"
              width={500}
              height={500}
              alt="cardtop"
            />

            {/* Konten Teks (z-10 relative agar selalu berada di atas gambar ornamen) */}
            <div className="relative z-10 flex flex-col gap-4">
              <p className={`${playball.className} text-xl font-semibold`}>
                Q.S. Al-Baqarah : 185
              </p>
              <p className="text-justify leading-relaxed">
                "(Beberapa hari yang ditentukan itu ialah) bulan Ramadan, bulan
                yang di dalamnya diturunkan (permulaan) Al-Qur'an sebagai
                petunjuk bagi manusia dan penjelasan-penjelasan mengenai
                petunjuk itu dan pembeda (antara yang hak dan yang bathil).
                Karena itu, barangsiapa di antara kamu hadir (di negeri tempat
                tinggalnya) di bulan itu, maka hendaklah ia berpuasa pada bulan
                itu, dan barangsiapa sakit atau dalam perjalanan (lalu ia
                berbuka), maka (wajiblah baginya berpuasa), sebanyak hari yang
                ditinggalkannya itu, pada hari-hari yang lain. Allah menghendaki
                kemudahan bagimu, dan tidak menghendaki kesukaran bagimu. Dan
                hendaklah kamu mencukupkan bilangannya dan hendaklah kamu
                mengagungkan Allah atas petunjuk-Nya yang diberikan kepadamu,
                supaya kamu bersyukur."
              </p>
            </div>

            {/* Ornamen Bawah Kartu (z-0 agar di bawah teks) */}
            <Image
              className="absolute right-0 bottom-0 z-0 opacity-30"
              src="/assets/corner-card.webp"
              width={200}
              height={200}
              alt="corner"
            />
          </div>
        </motion.div>

        {/* Komponen Lanjutan */}
        <div className="relative z-10 flex w-full flex-col items-center">
          <CountDown />
          <Section4 />
        </div>
      </div>
    </div>
  )
}
