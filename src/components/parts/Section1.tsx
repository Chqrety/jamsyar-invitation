import { berkshire, playball } from "@/app/fonts"
import Image from "next/image"

export default function Section1() {
  return (
    <div className="relative min-h-dvh pt-48">
      <Image
        src="/assets/border-top.webp"
        width={500}
        height={500}
        alt="top"
        className="absolute top-0 left-0 lg:hidden"
      />
      <Image
        src="/assets/moon.webp"
        width={200}
        height={200}
        alt="moon"
        className="absolute top-0 left-1/2 -translate-x-1/2 lg:hidden"
      />
      <div className="mb-10 flex justify-center">
        <div className="flex w-[80%] flex-col gap-10 rounded-3xl bg-transparent px-5 py-10 text-center text-xs shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
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
            className={`${berkshire.className} flex flex-col gap-1 text-center text-[#a76226]`}
          >
            <div className="text-2xl drop-shadow-[0_0_10px_rgba(167,98,38,0.5)] md:text-3xl lg:text-5xl xl:text-7xl">
              <p>Nuzulul Qur'an &</p>
            </div>
            <div className="text-xl drop-shadow-[0_0_10px_rgba(167,98,38,0.5)]">
              <p>Buka Bersama</p>
            </div>
          </div>
          <p>yang insyaAllah akan diselenggarakan</p>
        </div>
      </div>
      <Image
        className="block opacity-30 lg:hidden"
        src="/assets/masjid-1.webp"
        width={500}
        height={500}
        alt="masjid"
      />
    </div>
  )
}
