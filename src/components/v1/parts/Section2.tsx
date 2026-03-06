import { playball } from "@/app/fonts"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Section2() {
  return (
    <div className="relative pt-48">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 lg:hidden"
      >
        <Image
          src="/assets/top-section-2.svg"
          width={500}
          height={500}
          alt="topsection2"
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center mb-10"
      >
        <div className="text-xs text-center flex flex-col gap-5 w-[80%] px-5 py-10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-transparent rounded-3xl">
          <p className="w-full text-xl">Save the Date</p>
          <div>
            <p className="text-xl">Senin, 17 Maret 2025</p>
            <p className={`${playball.className} text-2xl`}>
              17 Ramadhan 1446 H
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className={`${playball.className} text-sm`}>
              16.00 WIB - selesai
            </p>
            <p className="text-xs">
              Lantai 7, PT. Penjaminan Jamkrindo Syariah
            </p>
            <p className="text-xs italic font-semibold">
              Dresscode: Baju Muslim Putih
            </p>
          </div>
          <p>
            Kami sangat mengharapkan kehadiran Bapak/Ibu/Saudara/i untuk
            bersama-sama meraih keberkahan Ramadan. Semoga kebersamaan ini
            semakin mempererat ukhuwah Islamiyah di antara kita semua.
          </p>
          <p>Terimakasih</p>
          <p className={`${playball.className} text-lg`}>
            Wassalamu'alaikum Warahmatullahi <br /> Wabarakatuh
          </p>
          <p>
            Hormat kami, <br />
            PT. Penjaminan Jamkrindo Syariah
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          className="block lg:hidden"
          src="/assets/bottom-section-2.svg"
          width={500}
          height={500}
          alt="bottomsection"
        />
      </motion.div>
    </div>
  )
}
