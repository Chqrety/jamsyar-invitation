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
    <div className="flex min-h-screen w-full justify-center bg-[#fdf2de]">
      {/* Layar Fix 100dvh (Tidak bisa di-scroll) */}
      <div className="relative h-dvh w-full max-w-[430px] overflow-hidden bg-[#fdf2de] shadow-2xl">
        {/* HEADER BAWAH BORDER (Tetap Absolute di Atas) */}
        <div className="absolute top-0 right-0 left-0 z-20 flex w-full flex-col">
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
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* KONTEN UTAMA (Berada Tepat di Tengah Layar) */}
        {/* Menggunakan pt-24 dan pb-32 agar konten tidak menabrak header dan footer */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-24 pb-32">
          {/* Bulan diperkecil sedikit agar aman di layar pendek */}
          <div className="mb-2 flex justify-center">
            <Image
              src="/assets/moon.webp"
              width={120}
              height={120}
              alt="moon"
              className="h-42 w-42 object-contain md:h-32 md:w-32"
            />
          </div>

          <div className="flex w-full flex-col items-center gap-3">
            {/* Judul Acara */}
            <div
              className={`${ruhia.className} flex flex-col items-center text-center leading-tight text-[#a76226]`}
            >
              <p className="text-4xl drop-shadow-[0_0_10px_rgba(167,98,38,0.5)]">
                Nuzulul Qur'an
              </p>
              <p className="text-xl drop-shadow-[0_0_10px_rgba(167,98,38,0.5)]">
                dan Buka Bersama
              </p>
            </div>

            {/* Info Detail (Gap dirapatkan) */}
            <div className="flex w-full flex-col items-center gap-3">
              <div className="w-full text-center">
                <p className="text-lg font-bold text-[#a76226]">
                  PT. JAMKRINDO SYARIAH
                </p>
                <p className="text-xs font-medium md:text-xs">
                  12 MARET 2026 / 22 RAMADHAN 1447 H
                </p>
              </div>
              <div className="w-2/3 text-center text-xs leading-tight md:text-xs">
                <p>
                  “Reshaping for Taqwa: Transforming Our Soul, Driving Our
                  Excellence”
                </p>
              </div>
              <div className="w-full text-center text-xs leading-tight italic md:text-xs">
                <p>
                  Bersama:
                  <br />
                  <span className="text-sm font-semibold not-italic">
                    Ustadz KH. Muhammad Cholil Nafis, Lc., M.A., Ph.D.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* TOMBOL & NAMA TAMU (Masuk ke urutan tengah, tidak lagi absolute) */}
          <div className="mt-4 flex flex-col items-center gap-2 text-center">
            <div className="text-[#a76226]">
              <p className="text-xs font-semibold">Kepada Yth:</p>
              {loading ? (
                <span className="loading loading-dots loading-sm mt-1"></span>
              ) : (
                <div className="mt-0.5 leading-tight">
                  <p className="text-sm font-bold">{visitorName || "Guest"}</p>
                  <p className="text-xs font-bold italic">
                    {visitorPosition || (!visitorName ? "No Positions" : "")}
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={onUnlock}
              className="mt-1 flex items-center gap-2 rounded-3xl bg-[#a76226] px-5 py-2 text-xs font-semibold text-[#fdf2de] transition-transform hover:scale-105 active:scale-95"
            >
              <Image
                src="/v1/assets/mail.svg"
                width={16}
                height={16}
                alt="mail"
              />
              BUKA UNDANGAN
            </button>
          </div>
        </div>

        {/* FOOTER: Masjid, Daun, dan Logo Bawah (Tetap Absolute di Bawah) */}
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 flex w-full flex-col">
          <div className="relative flex w-full items-end justify-center">
            <Image
              src="/assets/masjid.webp"
              width={1080}
              height={1080}
              alt="masjid"
              className="w-full opacity-10"
            />
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
          <div className="pointer-events-auto flex w-full items-center justify-between bg-white px-2 py-1 pb-2">
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

            <div className="flex w-[10%] justify-center">
              <Image
                src="/assets/ethos.webp"
                width={30}
                height={30}
                alt="ethos"
                className="object-contain"
              />
            </div>

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
