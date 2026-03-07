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

      let formattedName = params.name
        .replace(/-/g, " ") // Ganti "-" dengan spasi
        .split(" ") // Pisah berdasarkan spasi
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Title Case
        .join(" ")

      // LOG 1: Cek nama yang dikirim ke Supabase (Berguna untuk debug jika data null)
      console.log("🔍 Mencari visitor dengan nama:", formattedName)

      const { data, error } = await supabase
        .from("visitors_jsr")
        .select("id, name, position, presence")
        .ilike("name", formattedName)
        .maybeSingle()

      if (error) {
        console.error("❌ Error fetching visitor:", error)
      } else {
        // LOG 2: Cek data hasil balikan dari Supabase
        console.log("✅ Data visitor ditemukan:", data)
      }

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
