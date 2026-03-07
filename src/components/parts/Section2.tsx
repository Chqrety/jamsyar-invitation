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
          src="/assets/border-top.webp"
          width={500}
          height={500}
          alt="border-top"
        />
        <Image
          src="/assets/moon.webp"
          width={200}
          height={200}
          alt="moon"
          className="absolute top-0 left-1/2 -translate-x-1/2 lg:hidden"
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-10 flex justify-center"
      >
        <div className="flex w-[80%] flex-col gap-5 rounded-3xl bg-transparent px-5 py-10 text-center text-xs shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <p className="w-full text-xl">Save the Date</p>
          <div>
            <p className="text-xl">Kamis, 12 Maret 2026</p>
            <p className={`${playball.className} text-2xl`}>
              22 Ramadhan 1447 H
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className={`${playball.className} text-sm`}>
              15.30 WIB - selesai
            </p>
            <p className="text-xs">
              Pelaksanaan Kantor Pusat dan KCK Aula lantai 7 &
            </p>
            <p className="text-xs">
              Pelaksanaan Cabang <br /> (Zoom dengan link terlampir)
            </p>
            <p className="text-xs font-semibold italic">
              Dresscode: Atasan Putih Muslim
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
          src="/assets/bottom-section-2.webp"
          width={500}
          height={500}
          alt="masjid"
        />
        <Image
          src="/assets/leaf-l.webp"
          width={100}
          height={100}
          alt="leaf"
          className="absolute bottom-0 left-0 translate-x-0"
        />
        <Image
          src="/assets/leaf-r.webp"
          width={100}
          height={100}
          alt="leaf"
          className="absolute right-0 bottom-0 translate-x-0"
        />
      </motion.div>
    </div>
  )
}
