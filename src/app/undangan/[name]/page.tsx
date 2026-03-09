"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { LockScreen, Main } from "@/components"
import { useVisitorStore } from "@/store/useVisitorStore"
import { AnimatePresence, motion } from "framer-motion"

interface Visitor {
  name: string
  position: string
}

const Page = () => {
  const params = useParams() as { name: string }
  const { visitor, setVisitor } = useVisitorStore()
  const [loading, setLoading] = useState(true)
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    const fetchVisitor = async () => {
      if (!params.name) return

      setLoading(true)

      const searchPattern = params.name.split("-").join("%")

      let { data, error } = await supabase
        .from("visitors_jsr")
        .select("id, name, position, presence")
        .ilike("name", `%${searchPattern}%`)
        .limit(1)
        .maybeSingle()

      if (!data) {
        console.log("Nama tidak ditemukan, beralih mencari Posisi...")

        const { data: fallbackData, error: fallbackError } = await supabase
          .from("visitors_jsr")
          .select("id, name, position, presence")
          .ilike("position", `%${searchPattern}%`)
          .limit(1)
          .maybeSingle()

        data = fallbackData
        error = fallbackError
      }

      if (error) console.error("Error fetching visitor:", error)

      setVisitor(data)
      setLoading(false)
    }

    fetchVisitor()
  }, [params.name, setVisitor])

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
          <LockScreen
            loading={loading}
            onUnlock={() => setIsUnlocked(true)}
            visitorName={visitor?.name}
            visitorPosition={visitor?.position}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Page
