import { useVisitorStore } from "@/store/useVisitorStore"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { toast } from "react-toastify"

export default function Section4() {
  const visitor = useVisitorStore(state => state.visitor)
  const [presence, setPresence] = useState("")

  const handleSubmit = async () => {
    if (!visitor?.name || !presence)
      return toast.warning("Harap lengkapi form!")

    const { error } = await supabase
      .from("visitors")
      .update({
        presence,
      })
      .eq("name", visitor.name)

    if (error) {
      toast.error("Gagal update data")
    } else {
      toast.success("Data berhasil dikirim!")
    }
  }

  useEffect(() => {
    if (visitor?.presence) {
      setPresence(visitor.presence)
    }
  }, [visitor])

  return (
    <div className="relative flex flex-col bg-[#EEF3FF] py-12">
      <div className="mb-10 flex justify-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex w-[80%] flex-col items-center gap-8 rounded-3xl bg-transparent px-5 pt-10 pb-5 text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex flex-col gap-3">
            <p className="text-4xl font-bold text-[#27445D]">RSVP</p>
            <p className="text-xs text-[#27445D]">
              Diharapkan kepada pada para undangan untuk mengisi form kehadiran
              dibawah ini
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex w-full max-w-xs flex-col items-start gap-1 text-black">
              <p className="text-sm">
                Nama Lengkap <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                value={visitor?.name || ""}
                placeholder="Tulis Nama Anda"
                className="w-full rounded-[2px] bg-[#497D74]/10 p-3 text-sm text-black"
                disabled
              />
            </div>
            <div className="flex w-full max-w-xs flex-col items-start gap-1 text-black">
              <p className="text-sm">
                Konfirmasi Kehadiran <span className="text-red-500">*</span>
              </p>
              <select
                value={presence}
                onChange={e => setPresence(e.target.value)}
                className="select bg-[#497D74]/10 text-black"
              >
                <option value="" disabled={true}>
                  Konfirmasi Kehadiran Anda
                </option>
                <option value="Hadir">Hadir nuzulul qur'an</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="btn btn-secondary xl:hover:btn-secondary rounded-3xl border-none px-5 text-[#EFE9D5]"
            >
              SUBMIT
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
