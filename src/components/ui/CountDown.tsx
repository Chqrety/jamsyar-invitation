"use client"

import { playball } from "@/app/fonts"
import { useEffect, useState } from "react"

export default function Countdown() {
  const targetDate = new Date()
  targetDate.setDate(12)
  targetDate.setHours(15, 30, 0, 0)

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const now = new Date()

    const difference = targetDate.getTime() - now.getTime()

    if (difference <= 0)
      return { days: "00", hours: "00", minutes: "00", seconds: "00" }

    const days = String(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0")
    const hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0")
    const minutes = String(
      Math.floor((difference / (1000 * 60)) % 60)
    ).padStart(2, "0")
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
      2,
      "0"
    )

    return { days, hours, minutes, seconds }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={`${playball.className} flex justify-center gap-3 text-center text-5xl text-[#a76226]`}
    >
      <div className="flex w-fit flex-col items-center justify-center">
        <p>{timeLeft.days}</p>
        <p className="text-lg">hari</p>
      </div>
      <p>:</p>
      <div className="flex w-fit flex-col items-center justify-center">
        <p>{timeLeft.hours}</p>
        <p className="text-lg">jam</p>
      </div>
      <p>:</p>
      <div className="flex w-fit flex-col items-center justify-center">
        <p>{timeLeft.minutes}</p>
        <p className="text-lg">menit</p>
      </div>
      <p>:</p>
      <div className="flex w-fit flex-col items-center justify-center">
        <p>{timeLeft.seconds}</p>
        <p className="text-lg">detik</p>
      </div>
    </div>
  )
}
