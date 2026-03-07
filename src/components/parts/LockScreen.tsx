import { Berkshire_Swash } from "next/font/google"
import { ruhia } from "../../app/fonts"
import Image from "next/image"

interface LockScreenProps {
  onUnlock: () => void
  visitorName?: string
  visitorPosition?: string
  loading: boolean
}

export default function LockScreen({
  onUnlock,
  visitorName,
  visitorPosition,
  loading,
}: LockScreenProps) {
  return (
    // Tambahkan wrapper luar dengan background (opsional, misal bg-gray-100/bg-[#fdf2de])
    <div className="flex min-h-screen w-full justify-center bg-[#fdf2de]">
      {/* Container Utama Mobile
    max-w-[430px]: Membatasi lebar maksimal seperti HP (misal iPhone 14 Pro Max)
    shadow-2xl: Memberi bayangan agar terpisah dari background luar
    overflow-hidden: Memastikan elemen daun/masjid tidak bocor ke luar kotak
  */}
      <div className="relative h-dvh w-full max-w-[430px] overflow-hidden bg-[#fdf2de] shadow-2xl">
        {/* HEADER BAWAH BORDER */}
        <div className="absolute top-0 z-10 flex w-full flex-col">
          <div className="flex w-full items-center justify-between bg-white px-2 py-1">
            <div className="flex h-7 w-1/3 items-center justify-start">
              <Image
                src="/assets/danantara.webp"
                width={100}
                height={40}
                alt="danantara"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex h-7 w-1/3 items-center justify-center">
              <Image
                src="/assets/gerak.webp"
                width={100}
                height={40}
                alt="gerak"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex h-7 w-1/3 items-center justify-end">
              <Image
                src="/assets/jamsyar.webp"
                width={100}
                height={40}
                alt="jamsyar"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <Image
            src="/assets/border-top.webp"
            width={700}
            height={700}
            alt="lantern"
            className="h-auto w-full object-cover" // Memastikan border menyesuaikan lebar kotak
            priority
          />
        </div>

        {/* KONTEN UTAMA (Tengah) */}
        <div className="no-scrollbar relative z-10 flex h-full flex-col overflow-y-auto pt-12 pb-40">
          <div className="flex justify-center pt-5">
            <Image
              src="/assets/moon.webp"
              width={180}
              height={180}
              alt="moon"
            />
          </div>

          <div className="flex flex-col gap-6 pt-4">
            <div className="flex justify-center">
              <div
                className={`${ruhia.className} flex flex-col gap-1 text-center text-[#a76226]`}
              >
                <div className="text-4xl drop-shadow-[0_0_10px_rgba(167,98,38,0.5)]">
                  <p>Nuzulul Qur'an</p>
                </div>
                <div className="text-xl drop-shadow-[0_0_10px_rgba(167,98,38,0.5)]">
                  <p>dan</p>
                  <p>Buka Bersama</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex w-full max-w-[85%] flex-col items-center justify-between gap-5">
                <div className="w-full text-center">
                  <p className="text-lg font-bold text-[#a76226]">
                    PT. JAMKRINDO SYARIAH
                  </p>
                  <p className="text-xs font-medium">
                    12 MARET 2026 / 22 RAMADHAN 1447 H
                  </p>
                </div>
                <div className="w-full text-center text-xs">
                  <p>
                    “Indeed, We sent the Qur'an down during the Night of Decree.
                    And what can make you know what is the Night of Decree? The
                    Night of Decree is better than a thousand months.”
                  </p>
                  <p className="mt-1 font-medium">(QS 97: 1-3)</p>
                </div>
                <div className="w-full text-center text-xs italic">
                  <p>
                    Bersama:
                    <br />
                    <span className="text-sm font-semibold not-italic">
                      KH. Muhammad Cholil Nafis, Lc., M.A., Ph.D.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOMBOL & NAMA TAMU (Posisi tetap di atas daun) */}
        <div className="absolute right-0 bottom-[60px] left-0 z-30 flex flex-col items-center gap-4 text-center">
          <div className="text-[#a76226]">
            <p className="text-xs font-semibold">Kepada Yth:</p>
            {loading ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              <>
                <p className="text-base font-bold">{visitorName || "Guest"}</p>
                <p className="text-xs font-bold italic">
                  {visitorPosition || "No Positions"}
                </p>
              </>
            )}
          </div>

          <button
            onClick={onUnlock}
            className="flex gap-2 rounded-3xl bg-[#a76226] px-5 py-2 text-sm font-semibold text-[#fdf2de] transition-transform hover:scale-105 active:scale-95"
          >
            <Image
              src="/v1/assets/mail.svg"
              width={18}
              height={18}
              alt="mail"
            />
            BUKA UNDANGAN
          </button>
        </div>

        {/* FOOTER: Masjid, Daun, dan Logo Bawah */}
        <div className="absolute bottom-0 z-20 w-full">
          <div className="relative flex w-full items-end justify-center">
            <Image
              src="/assets/masjid.webp"
              width={1080}
              height={1080}
              alt="masjid"
              className="w-full opacity-10"
            />
            {/* Daun ditarik ke dalam container relatif */}
            <Image
              src="/assets/leaf-l.webp"
              width={80}
              height={80}
              alt="leaf left"
              className="absolute bottom-0 left-0 w-1/4"
            />
            <Image
              src="/assets/leaf-r.webp"
              width={80}
              height={80}
              alt="leaf right"
              className="absolute right-0 bottom-0 w-1/4"
            />
          </div>

          {/* Row Logo Paling Bawah */}
          <div className="flex w-full items-center justify-between bg-white px-2 py-1 pb-2">
            {/* Kiri: Sosmed & Web */}
            <div className="flex w-[45%] flex-col gap-0.5">
              <div className="flex items-center gap-1">
                <Image
                  src="/assets/facebook.svg"
                  width={12}
                  height={12}
                  alt="fb"
                  className="object-contain"
                />
                <Image
                  src="/assets/youtube.svg"
                  width={12}
                  height={12}
                  alt="yt"
                  className="object-contain"
                />
                <Image
                  src="/assets/linkedin.svg"
                  width={12}
                  height={12}
                  alt="li"
                  className="object-contain"
                />
                <Image
                  src="/assets/instagram.svg"
                  width={12}
                  height={12}
                  alt="ig"
                  className="object-contain"
                />
                <p className="text-[0.45rem] font-medium whitespace-nowrap text-gray-700">
                  | Jamkrindo Syariah
                </p>
              </div>
              <p className="text-[0.55rem] font-bold text-[#2a3b8c]">
                www.jamkrindosyariah.co.id
              </p>
            </div>

            {/* Tengah: Ethos */}
            <div className="flex w-[10%] justify-center">
              <Image
                src="/assets/ethos.webp"
                width={30}
                height={30}
                alt="ethos"
                className="object-contain"
              />
            </div>

            {/* Kanan: OJK */}
            <div className="flex w-[45%] justify-end text-right">
              <p className="text-[0.45rem] leading-tight font-medium text-[#2a3b8c]">
                PT Jamkrindo Syariah berizin dan
                <br />
                diawasi oleh Otoritas Jasa Keuangan (OJK)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
