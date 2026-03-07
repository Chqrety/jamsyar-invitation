import { berkshire, playball } from "@/app/fonts"
import Image from "next/image"

export default function Section1() {
  return (
    <div className="flex min-h-screen w-full justify-center">
      {/* Container Utama Mobile (Maksimal lebar 430px) */}
      <div className="relative min-h-dvh w-full max-w-[430px] overflow-hidden pt-48 pb-32 shadow-2xl">
        {/* Ornamen Atas */}
        <Image
          src="/assets/border-top.webp"
          width={500}
          height={500}
          alt="top"
          className="absolute top-0 left-0 z-0 h-auto w-full"
        />
        <Image
          src="/assets/moon.webp"
          width={200}
          height={200}
          alt="moon"
          className="absolute top-0 left-1/2 z-0 -translate-x-1/2"
        />

        {/* Konten Utama (Kartu Ucapan) */}
        <div className="relative z-10 mb-10 flex justify-center px-4">
          {/* Card dengan shadow asli Anda */}
          <div className="flex w-full max-w-[85%] flex-col gap-8 rounded-3xl bg-transparent px-5 py-8 text-center text-xs shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <p
              className={`${playball.className} w-full text-lg leading-relaxed`}
            >
              Assalamu'alaikum Warahmatullahi
              <br />
              Wabarakatuh,
            </p>

            <p className="leading-relaxed">
              Puji dan syukur kita panjatkan ke hadirat Allah SWT yang telah
              memberikan rahmat dan hidayah-Nya kepada kita semua.
            </p>

            <p className="leading-relaxed">
              Dalam rangka memperingati Nuzulul Quran serta mempererat tali
              silaturahmi di bulan suci Ramadan, PT. Penjaminan Jamkrindo
              Syariah dengan hormat mengundang Bapak/Ibu/Saudara/i untuk hadir
              dalam acara
            </p>

            {/* Judul Acara (Responsive Desktop Dihapus) */}
            <div
              className={`${berkshire.className} flex flex-col gap-1 text-center text-[#a76226]`}
            >
              <div className="text-3xl drop-shadow-[0_0_10px_rgba(167,98,38,0.5)]">
                <p>Nuzulul Qur'an &</p>
              </div>
              <div className="text-2xl drop-shadow-[0_0_10px_rgba(167,98,38,0.5)]">
                <p>Buka Bersama</p>
              </div>
            </div>

            <p className="leading-relaxed">
              "Reshaping for Taqwa: Transforming Our Soul, Driving Our
              Excellence"
            </p>

            <p className="leading-relaxed">
              yang insyaAllah akan diselenggarakan
            </p>
          </div>
        </div>

        {/* Ornamen Bawah (Masjid) */}
        <Image
          className="absolute bottom-0 left-0 z-0 w-full object-cover opacity-30"
          src="/assets/masjid-1.webp"
          width={500}
          height={500}
          alt="masjid"
        />
      </div>
    </div>
  )
}
