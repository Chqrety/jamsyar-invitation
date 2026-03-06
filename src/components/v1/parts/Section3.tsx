import { playball } from "@/app/fonts"
import Image from "next/image"
import Section4 from "./Section4"
import { CountDown } from ".."
import { motion } from "framer-motion"

export default function Section3() {
  return (
    <div className="relative flex flex-col bg-[#EEF3FF] py-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        // viewport={{ amount: 0.2 }}
        className="flex justify-center mb-10 text-[#06205B]"
      >
        <div className="relative text-xs text-center flex flex-col gap-5 w-[80%] px-5 py-10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-transparent rounded-3xl">
          <Image
            className="absolute top-0 left-0 z-10 opacity-30"
            src="/assets/card-top.png"
            width={500}
            height={500}
            alt="cardtop"
          />
          <p className={`${playball.className} text-xl`}>
            Q.S. Al-Baqarah : 185
          </p>
          <p className="text-justify">
            "(Beberapa hari yang ditentukan itu ialah) bulan Ramadan, bulan yang
            di dalamnya diturunkan (permulaan) Al-Qur'an sebagai petunjuk bagi
            manusia dan penjelasan-penjelasan mengenai petunjuk itu dan pembeda
            (antara yang hak dan yang bathil). Karena itu, barangsiapa di antara
            kamu hadir (di negeri tempat tinggalnya) di bulan itu, maka
            hendaklah ia berpuasa pada bulan itu, dan barangsiapa sakit atau
            dalam perjalanan (lalu ia berbuka), maka (wajiblah baginya
            berpuasa), sebanyak hari yang ditinggalkannya itu, pada hari-hari
            yang lain. Allah menghendaki kemudahan bagimu, dan tidak menghendaki
            kesukaran bagimu. Dan hendaklah kamu mencukupkan bilangannya dan
            hendaklah kamu mengagungkan Allah atas petunjuk-Nya yang diberikan
            kepadamu, supaya kamu bersyukur."
          </p>
          <Image
            className="absolute bottom-0 right-0 z-10 opacity-30"
            src="/assets/corner-card.png"
            width={200}
            height={200}
            alt="corner"
          />
        </div>
      </motion.div>
      <CountDown />

      <Section4 />
    </div>
  )
}
