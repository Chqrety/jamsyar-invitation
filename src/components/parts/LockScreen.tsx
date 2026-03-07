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
    <div className="relative h-dvh xl:pt-64">
      <div className="absolute top-0 flex flex-col">
        <div className="flex w-full items-center justify-between bg-white px-2 py-1">
          {/* Container untuk Logo 1 */}
          <div className="flex h-7 w-1/3 items-center justify-start">
            <Image
              src="/assets/danantara.webp"
              width={100} // Beri width proporsional yang cukup besar
              height={40} // Height sesuai container h-7 (40px)
              alt="danantara"
              className="h-full w-auto object-contain" // h-full memaksa gambar isi tinggi container
            />
          </div>

          {/* Container untuk Logo 2 */}
          <div className="flex h-7 w-1/3 items-center justify-center">
            <Image
              src="/assets/gerak.webp"
              width={100}
              height={40}
              alt="gerak"
              className="h-full w-auto object-contain"
            />
          </div>

          {/* Container untuk Logo 3 */}
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
          priority
        />
      </div>
      <div className="flex justify-center pt-10">
        <Image src="/assets/moon.webp" width={220} height={220} alt="moon" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <div
            className={`${ruhia.className} flex flex-col gap-1 text-center text-[#a76226]`}
          >
            <div className="text-4xl drop-shadow-[0_0_10px_rgba(167,98,38,0.5)] md:text-3xl lg:text-5xl xl:text-7xl">
              <p>Nuzulul Qur'an</p>
            </div>
            <div className="text-xl drop-shadow-[0_0_10px_rgba(167,98,38,0.5)]">
              <p>dan</p>
              <p>Buka Bersama</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex w-full max-w-[80%] flex-col items-center justify-between gap-6 xl:flex-row">
            <div className="w-full text-center xl:w-1/6">
              <p className="text-lg font-bold xl:text-xl">
                PT. JAMKRINDO SYARIAH
              </p>
              <p className="text-xs xl:text-base">12 MARET 2026/</p>
              <p className="text-xs xl:text-base">22 RAMADHAN 1447 H</p>
            </div>
            <div className="w-full text-center text-xs xl:w-1/6 xl:text-base">
              <p>
                “Indeed, We sent the Qur'an down during the Night of Decree. And
                what can make you know what is the Night of Decree? The Night of
                Decree is better than a thousand months.”
              </p>
              <p className="text-center">(QS 97: 1-3)</p>
            </div>
            <div className="w-full text-center text-xs italic xl:w-1/6 xl:text-base">
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
        {/* <div className="absolute z-10 flex justify-center -translate-x-1/2 bottom-52 left-1/2">
          <Image src="/assets/quran.webp" width={200} height={200} alt="quran" />
        </div> */}
        <div className="absolute bottom-28 left-1/2 z-20 -translate-x-1/2 text-center text-[#a76226] lg:text-[#a76226]">
          <p className="text-xs font-semibold">Kepada Yth:</p>
          {loading ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            <>
              <p className="text font-bold">{visitorName || "Guest"}</p>
              <p className="text-sm font-bold italic">
                {visitorPosition || "No Positions"}
              </p>
            </>
          )}
        </div>
        <div className="mt-18 flex justify-center">
          <button
            onClick={onUnlock}
            className="absolute bottom-14 z-20 flex gap-2 rounded-3xl bg-[#a76226] px-5 py-2 text-[#fdf2de] hover:cursor-pointer lg:bg-teal-800"
          >
            <Image
              src="/v1/assets/mail.svg"
              width={20}
              height={20}
              alt="mail"
            />
            BUKA UNDANGAN
          </button>
        </div>
        <div className="absolute bottom-0 w-full">
          {/* Kontainer Relatif untuk Masjid dan Daun */}
          <div className="relative w-full">
            <Image
              src="/assets/masjid.webp"
              width={1080}
              height={1080}
              alt="quran"
              className="w-full opacity-10"
            />

            {/* Daun Kiri - Sekarang nempel ke bawah gambar masjid */}
            <Image
              src="/assets/leaf-l.webp"
              width={100}
              height={100}
              alt="leaf"
              className="absolute bottom-0 left-0 w-1/4 md:w-[100px]"
            />

            {/* Daun Kanan - Sekarang nempel ke bawah gambar masjid */}
            <Image
              src="/assets/leaf-r.webp"
              width={100}
              height={100}
              alt="leaf"
              className="absolute right-0 bottom-0 w-1/4 md:w-[100px]"
            />
          </div>

          {/* Row Logo di paling bawah */}
          <div className="flex w-full items-center justify-between bg-white px-2 py-1">
            {/* kiri */}
            <div className="flex items-center gap-2">
              <div>
                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/facebook.svg"
                      width={40}
                      height={40}
                      alt="facebook"
                      className="h-full w-4 rounded-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/youtube.svg"
                      width={40}
                      height={40}
                      alt="youtube"
                      className="h-full w-4 rounded-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/linkedin.svg"
                      width={40}
                      height={40}
                      alt="linkedin"
                      className="h-full w-4 rounded-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/instagram.svg"
                      width={40}
                      height={40}
                      alt="instagram"
                      className="h-full w-4 rounded-full object-contain"
                    />
                  </div>
                  <p className="text-[0.5rem] text-black">
                    | Jamkrindo Syariah
                  </p>
                </div>
                <p className="text-[0.7rem] font-bold text-blue-900">
                  www.jamkrindosyariah.co.id
                </p>
              </div>
              <div className="w-7">
                <Image
                  src="/assets/ethos.webp"
                  width={40}
                  height={40}
                  alt="ethos"
                />
              </div>
            </div>

            {/* kanan */}
            <p className="w-5/12 text-right text-[0.5rem] font-semibold text-blue-900">
              PT Jamkrindo Syariah berizin dan diawasi oleh Otoritas Jasa
              Keuangan (OJK)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
