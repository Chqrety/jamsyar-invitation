import { useEffect, useState } from "react"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"

export default function Main({ isUnlocked }: { isUnlocked: boolean }) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new Audio("/assets/backsound-ramadhan.mp3"))
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
      <div className="fixed z-20 flex items-center gap-2 px-5 py-3 transform rounded-full bottom-5 right-3 bg-white/20 backdrop-blur-md">
        <button onClick={togglePlayPause} className="text-lg text-white">
          {isPlaying ? "⏸" : "▶"}
        </button>
      </div>
      <div className="bg-[#06205B]">
        <Section1 />
        <Section2 />
      </div>
      <Section3 />
    </>
  )
}
