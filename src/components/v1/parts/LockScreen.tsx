import { Berkshire_Swash } from "next/font/google"
import Image from "next/image"

const berkshire = Berkshire_Swash({ subsets: ["latin"], weight: "400" })

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
    <div className="relative h-dvh pt-24 xl:pt-64">
      <div className="absolute top-0 flex">
        <Image
          src="/assets/lantern.png"
          width={700}
          height={700}
          alt="lantern"
        />
        <Image
          className="hidden md:block"
          src="/assets/lantern.png"
          width={700}
          height={700}
          alt="lantern"
        />
        <Image
          className="hidden md:block"
          src="/assets/lantern.png"
          width={700}
          height={700}
          alt="lantern"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <div
            className={`${berkshire.className} flex flex-col gap-1 text-center text-[#FFE5AA]`}
          >
            <div className="text-5xl drop-shadow-[0_0_10px_rgba(255,229,170,0.8)] md:text-3xl lg:text-5xl xl:text-7xl">
              <p>Nuzulul</p>
              <p>Qur'an</p>
            </div>
            <div className="text-3xl drop-shadow-[0_0_10px_rgba(255,229,170,0.8)]">
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
              <p className="text-xs xl:text-base">17 MARET 2025/</p>
              <p className="text-xs xl:text-base">17 RAMADHAN 1446 H</p>
            </div>
            <div className="w-full text-center text-xs xl:w-1/6 xl:text-base">
              <p>
                “Indeed, We sent the Qur'an down during the Night of Decree. And
                what can make you know what is the Night of Decree? The Night of
                Decree is better than a thousand months.”
              </p>
              <p className="text-center">(QS 97: 1-3)</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-52 left-1/2 z-10 flex -translate-x-1/2 justify-center">
          <Image src="/assets/quran.png" width={200} height={200} alt="quran" />
        </div>
        <div className="absolute bottom-32 left-1/2 z-20 -translate-x-1/2 text-center text-[#06205B] lg:text-[#efe9d5]">
          <p className="text-xs font-semibold">Kepada Yth:</p>
          {loading ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            <>
              <p className="text font-bold">{visitorName || "Guest"}</p>
              <p className="text-sm font-bold italic">
                {visitorPosition || "No Posiitons"}
              </p>
            </>
          )}
        </div>
        <div className="mt-18 flex justify-center">
          <button
            onClick={onUnlock}
            className="absolute bottom-16 z-20 flex gap-2 rounded-3xl bg-[#06205B] px-5 py-2 hover:cursor-pointer lg:bg-teal-800"
          >
            <Image src="/assets/mail.svg" width={20} height={20} alt="mail" />
            BUKA UNDANGAN
          </button>
        </div>
        <Image
          className="absolute bottom-28 left-0 xl:bottom-0"
          src="/assets/cloud1-back.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute right-0 bottom-28 xl:bottom-0"
          src="/assets/cloud4-back.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute bottom-24 left-0 z-10 xl:bottom-0"
          src="/assets/cloud1-top.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute right-0 bottom-24 z-10 xl:bottom-0"
          src="/assets/cloud4-top.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute bottom-12 left-0 z-10 xl:bottom-0"
          src="/assets/cloud1-mid.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute right-0 bottom-12 z-10 xl:bottom-0"
          src="/assets/cloud4-mid.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute right-0 bottom-0 z-10 xl:bottom-0"
          src="/assets/cloud2-down.png"
          width={300}
          height={300}
          alt="cloud"
        />
        <Image
          className="absolute bottom-0 left-0 z-10 xl:bottom-0"
          src="/assets/cloud3-down.png"
          width={300}
          height={300}
          alt="cloud"
        />
      </div>
    </div>
  )
}
