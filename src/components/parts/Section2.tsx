import { playball } from "@/app/fonts"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Section2() {
  return (
    <div className="flex min-h-screen w-full justify-center">
      {/* Container Utama Mobile (Maksimal lebar 430px) */}
      <div className="relative min-h-dvh w-full max-w-[430px] overflow-hidden pt-48 pb-10 shadow-2xl">
        {/* Ornamen Atas (Border & Moon) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-0 left-0 z-0 w-full"
        >
          <Image
            src="/assets/border-top.webp"
            width={500}
            height={500}
            alt="border-top"
            className="h-auto w-full object-cover"
          />
          <Image
            src="/assets/moon.webp"
            width={200}
            height={200}
            alt="moon"
            className="absolute top-0 left-1/2 -translate-x-1/2"
          />
        </motion.div>

        {/* Konten Utama (Kartu Save the Date) */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 mb-10 flex justify-center px-4"
        >
          <div className="flex w-full max-w-[85%] flex-col gap-5 rounded-3xl bg-transparent px-5 py-10 text-center text-xs shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <p className="w-full text-xl font-bold">Save the Date</p>

            <div>
              <p className="text-xl font-semibold">Kamis, 12 Maret 2026</p>
              <p className={`${playball.className} text-2xl text-[#a76226]`}>
                22 Ramadhan 1447 H
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <p className={`${playball.className} text-lg text-[#a76226]`}>
                15.30 WIB - selesai
              </p>
              <p className="text-xs">
                Pelaksanaan Kantor Pusat dan KCK Aula lantai 7 &
              </p>
              <p className="text-xs">
                Pelaksanaan Cabang <br /> (Zoom dengan link terlampir)
              </p>
              <p className="mt-2 text-xs font-semibold text-[#a76226] italic">
                Dresscode: Atasan Putih Muslim
              </p>
            </div>

            <p className="leading-relaxed">
              Kami sangat mengharapkan kehadiran Bapak/Ibu/Saudara/i untuk
              bersama-sama meraih keberkahan Ramadan. Semoga kebersamaan ini
              semakin mempererat ukhuwah Islamiyah di antara kita semua.
            </p>

            <p>Terimakasih</p>

            <p className={`${playball.className} text-lg text-[#a76226]`}>
              Wassalamu'alaikum Warahmatullahi <br /> Wabarakatuh
            </p>

            <p className="mt-2 font-semibold">
              Hormat kami, <br />
              PT. Penjaminan Jamkrindo Syariah
            </p>
          </div>
        </motion.div>

        {/* Ornamen Bawah (Masjid & Daun) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }} // y dikurangi sedikit agar animasinya mulus masuk ke dalam layar
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          // 1. Tambahkan positioning agar wadahnya jelas berada di paling bawah
          className="absolute bottom-0 left-0 z-0 w-full"
        >
          {/* 2. Gambar utama ini JANGAN absolute, agar motion.div punya tinggi asli */}
          <Image
            className="h-auto w-full object-cover"
            src="/assets/bottom-section-2.webp"
            width={500}
            height={500}
            alt="masjid"
          />

          {/* 3. Daun tetap absolute agar menempel di pojokan gambar utama */}
          <Image
            src="/assets/leaf-l.webp"
            width={100}
            height={100}
            alt="leaf"
            className="absolute bottom-0 left-0 w-1/4"
          />
          <Image
            src="/assets/leaf-r.webp"
            width={100}
            height={100}
            alt="leaf"
            className="absolute right-0 bottom-0 w-1/4"
          />
        </motion.div>
      </div>
    </div>
  )
}
