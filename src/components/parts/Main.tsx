import { useEffect, useState } from "react"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"

export default function Main({ isUnlocked }: { isUnlocked: boolean }) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newAudio = new Audio("/assets/backsound-ramadhan.mp3")
      newAudio.volume = 0.5 // <-- Set volume di sini (Range: 0.0 sampai 1.0)
      setAudio(newAudio)
    }
  }, [])

  useEffect(() => {
    if (isUnlocked && audio) {
      audio.play()
      audio.loop = true
      setIsPlaying(true)
    }
  }, [isUnlocked, audio])

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  return (
    <>
      <div className="fixed right-3 bottom-5 z-20 flex transform items-center gap-2 rounded-full bg-white/20 px-5 py-3 backdrop-blur-md">
        <button onClick={togglePlayPause} className="text-lg text-white">
          {isPlaying ? "⏸" : "▶"}
        </button>
      </div>
      <div className="bg-[#fdf2de]">
        <Section1 />
        <Section2 />
      </div>
      <Section3 />
    </>
  )
}
