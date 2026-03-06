"use client"

import { useState } from "react"
import { LockScreen, Main } from "../../components"
import { AnimatePresence, motion } from "framer-motion"

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false)

  return (
    <AnimatePresence mode="wait">
      {isUnlocked ? (
        <motion.div
          key="section1"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Main isUnlocked={isUnlocked} />
        </motion.div>
      ) : (
        <motion.div
          key="lockscreen"
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <LockScreen loading={false} onUnlock={() => setIsUnlocked(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
