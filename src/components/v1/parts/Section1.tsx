import { berkshire, playball } from "@/app/fonts"
import Image from "next/image"

export default function Section1() {
  return (
    <div className="relative pt-48 min-h-dvh">
      <Image
        className="absolute lg:hidden top-0 left-0"
        src="/assets/top-section-1.png"
        width={500}
        height={500}
        alt="top"
      />
      <div className="flex justify-center mb-10">
        <div className="text-xs text-center flex flex-col gap-10 w-[80%] px-5 py-10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-transparent rounded-3xl">
          <p className={`${playball.className} w-full text-lg`}>
            Assalamu'alaikum Warahmatullahi
            <br />
            Wabarakatuh,
          </p>
          <p>
            Puji dan syukur kita panjatkan ke hadirat Allah SWT yang telah
            memberikan rahmat dan hidayah-Nya kepada kita semua.
          </p>
          <p>
            Dalam rangka memperingati Nuzulul Quran serta mempererat tali
            silaturahmi di bulan suci Ramadan, PT. Penjaminan Jamkrindo Syariah
            dengan hormat mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara
          </p>
          <div
            className={`${berkshire.className} flex flex-col text-center gap-1 text-[#FFE5AA]`}
          >
            <div className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl drop-shadow-[0_0_10px_rgba(255,229,170,0.8)]">
              <p>Nuzulul Qur'an &</p>
            </div>
            <div className="text-xl drop-shadow-[0_0_10px_rgba(255,229,170,0.8)]">
              <p>Buka Bersama</p>
            </div>
          </div>
          <p>yang insyaAllah akan diselenggarakan</p>
        </div>
      </div>
      <Image
        className="block lg:hidden"
        src="/assets/masjid.png"
        width={500}
        height={500}
        alt="masjid"
      />
    </div>
  )
}
