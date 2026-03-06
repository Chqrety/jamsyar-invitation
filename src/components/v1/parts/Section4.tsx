import { useVisitorStore } from "@/store/useVisitorStore"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { toast } from "react-toastify"

export default function Section4() {
  const visitor = useVisitorStore((state) => state.visitor)
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
    console.log(visitor)
    if (visitor?.presence) {
      setPresence(visitor.presence)
    }
  }, [visitor])

  return (
    <div className="relative flex flex-col bg-[#EEF3FF] py-12 ">
      <div className="flex justify-center mb-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative text-center flex flex-col items-center gap-8 w-[80%] px-5 pt-10 pb-5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-transparent rounded-3xl"
        >
          <div className="flex flex-col gap-3">
            <p className="text-4xl font-bold text-[#27445D]">RSVP</p>
            <p className="text-xs text-[#27445D]">
              Diharapkan kepada pada para undangan untuk mengisi form kehadiran
              dibawah ini
            </p>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-col items-start max-w-xs w-full text-black gap-1">
              <p className="text-sm">
                Nama Lengkap <span className="text-red-500">*</span>
              </p>
              <input
                type="text"
                value={visitor?.name || ""}
                placeholder="Tulis Nama Anda"
                className="bg-[#497D74]/10 w-full text-sm text-black p-3 rounded-[2px]"
                disabled
              />
            </div>
            <div className="flex flex-col items-start max-w-xs w-full text-black gap-1">
              <p className="text-sm">
                Konfirmasi Kehadiran <span className="text-red-500">*</span>
              </p>
              <select
                value={presence}
                onChange={(e) => setPresence(e.target.value)}
                className="select text-black bg-[#497D74]/10"
              >
                <option value="" disabled={true}>
                  Konfirmasi Kehadiran Anda
                </option>
                <option value="Hadir">Hadir nuzulul qur'an</option>
                <option value="Tidak Hadir">Tidak Hadir</option>
              </select>
            </div>
          </div>
          <div className=" flex justify-center">
            <button
              onClick={handleSubmit}
              className="btn btn-secondary border-none rounded-3xl px-5 xl:hover:btn-secondary text-[#EFE9D5]"
            >
              SUBMIT
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
