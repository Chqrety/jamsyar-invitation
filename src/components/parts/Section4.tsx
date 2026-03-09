import { useVisitorStore } from "@/store/useVisitorStore"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { toast } from "react-toastify"

export default function Section4() {
  const visitor = useVisitorStore(state => state.visitor)
  const [presence, setPresence] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = async () => {
    if (!name || !presence) return toast.warning("Harap lengkapi form!")

    if (!visitor) {
      return toast.error("Data tamu tidak valid!")
    }

    // Cek apakah ini template jabatan (nama asli di DB kosong)
    const isGenericLink = !visitor.name

    if (isGenericLink) {
      const { error } = await supabase.from("visitors_jsr").insert([
        {
          name: name, // Nama dari inputan form
          position: visitor.position, // Tetap bawa nama jabatannya
          presence: presence,
        },
      ])

      if (error) {
        console.error(error)
        toast.error("Gagal menyimpan data baru")
      } else {
        toast.success("Data kehadiran berhasil dikirim!")
      }
    } else {
      const { error } = await supabase
        .from("visitors_jsr")
        .update({
          name: name, // Berjaga-jaga jika tamu mengoreksi ejaan namanya
          presence: presence,
        })
        .eq("id", visitor.id)

      if (error) {
        console.error(error)
        toast.error("Gagal update data")
      } else {
        toast.success("Kehadiran berhasil diupdate!")
      }
    }
  }

  useEffect(() => {
    if (visitor) {
      if (visitor.name) setName(visitor.name)
      if (visitor.presence) setPresence(visitor.presence)
    }
  }, [visitor])

  return (
    <div className="flex w-full justify-center">
      {/* Container Utama Mobile (Maksimal lebar 430px) dengan background asli Anda */}
      <div className="relative flex w-full max-w-[430px] flex-col overflow-hidden bg-[#fdf2de] py-12">
        <div className="mb-10 flex justify-center px-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex w-full max-w-[85%] flex-col items-center gap-8 rounded-3xl bg-transparent px-6 pt-10 pb-8 text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          >
            {/* Header RSVP */}
            <div className="flex flex-col gap-2">
              <p className="text-4xl font-bold text-[#a76226]">RSVP</p>
              <p className="text-xs leading-relaxed text-[#a76226]">
                Diharapkan kepada para undangan untuk mengisi form kehadiran di
                bawah ini
              </p>
            </div>

            {/* Form Input Container */}
            <div className="flex w-full flex-col gap-4">
              {/* Input Nama Lengkap */}
              <div className="flex w-full flex-col items-start gap-1.5 text-black">
                <p className="text-sm font-medium">
                  Nama Lengkap <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  disabled={!visitor}
                  placeholder="Tulis Nama Anda"
                  className="w-full rounded-md border border-black/20 bg-[#a76226]/10 p-3 text-sm text-black outline-none"
                />
              </div>

              {/* Select Konfirmasi Kehadiran */}
              <div className="flex w-full flex-col items-start gap-1.5 text-black">
                <p className="text-sm font-medium">
                  Konfirmasi Kehadiran <span className="text-red-500">*</span>
                </p>
                <select
                  value={presence}
                  onChange={e => setPresence(e.target.value)}
                  className="w-full rounded-md border border-black/20 bg-[#a76226]/10 p-3 text-sm text-black outline-none"
                >
                  <option value="" disabled={true}>
                    Konfirmasi Kehadiran Anda
                  </option>
                  <option value="Hadir">Hadir Nuzulul Qur'an</option>
                  <option value="Tidak Hadir">Tidak Hadir</option>
                </select>
              </div>
            </div>

            {/* Tombol Submit */}
            <div className="mt-2 flex w-full justify-center">
              <button
                onClick={handleSubmit}
                className="rounded-3xl border-none bg-[#a76226] px-8 py-3 text-sm font-bold text-[#EFE9D5] transition-transform hover:scale-105 active:scale-95"
              >
                SUBMIT
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
