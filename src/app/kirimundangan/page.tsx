"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import Image from "next/image"
import { ItemInstruksi, Modal } from "@/components"
import { toast } from "react-toastify"

const defaultMessage = `Assalamu'alaikum Warahmatullahi Wabarakatuh,

Yth.
Bapak/Ibu/Saudara/i.

[nama]

Dalam rangka memperingati Nuzulul Quran serta mempererat tali silaturahmi di bulan suci Ramadan, PT. Penjaminan Jamkrindo Syariah dengan hormat mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara Nuzulul Quran dan Buka Bersama, yang insyaAllah akan diselenggarakan :

[link-undangan]

Kami sangat mengharapkan kehadiran Bapak/Ibu/Saudara/i untuk bersama-sama meraih keberkahan Ramadan. Semoga kebersamaan ini semakin mempererat ukhuwah Islamiyah di antara kita semua.

Terimakasih

Wassalamu'alaikum Warahmatullahi Wabarakatuh

Hormat kami
Tim Ramadhan 1446 H
PT. Penjaminan Jamkrindo Syariah`

const cleanedMessage = defaultMessage
  .split("\n")
  .map(line => line.trimStart()) // Menghapus spasi di awal tiap baris
  .join("\n")

export default function Page() {
  const [input, setInput] = useState("")
  const [visitors, setVisitors] = useState<
    { id: number; name: string; position: string; presence: string }[]
  >([])
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState(cleanedMessage)
  const rowsPerPage = 25
  const [currentPage, setCurrentPage] = useState(1)

  const handleSubmit = async () => {
    if (!input.trim()) {
      toast.warning("Nama tamu tidak boleh kosong!")
      return
    }
    const rows = input.split("\n").map(line => {
      const [name, position] = line.split("-").map(s => s.trim())
      return { name, position }
    })

    const { error } = await supabase.from("visitors_jsr").insert(rows)
    if (error) toast.error("Gagal menyimpan")
    else {
      toast.success("Berhasil disimpan!")
      setInput("")
      fetchVisitors()
    }
  }

  const fetchVisitors = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from("visitors_jsr")
      .select("id, name, position, presence")
      .order("name", { ascending: true })
    if (error) {
      console.error("Error fetching visitors:", error)
    } else {
      setVisitors(data)
      toast.success("Berhasil memperbarui data")
    }
    setLoading(false)
  }

  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = visitors.slice(indexOfFirstRow, indexOfLastRow)
  const totalPages = Math.ceil(visitors.length / rowsPerPage)

  const generateInvitationLink = (name: string) => {
    if (!name) return ""

    const mainLink = `${window.location.origin}/undangan`

    const formattedName = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    return `${mainLink}/${formattedName}`
  }

  const handleWhatsAppShare = (visitor: { name: string }) => {
    const invitationLink = generateInvitationLink(visitor.name)

    const formattedMessage = text
      .replace("[nama]", visitor.name)
      .replace("[link-undangan]", invitationLink)

    const encodedMessage = encodeURIComponent(formattedMessage)
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
  }

  const handleCopyLink = (name: string) => {
    const invitationLink = generateInvitationLink(name)

    navigator.clipboard
      .writeText(invitationLink)
      .then(() => toast.success("Link berhasil disalin!"))
      .catch(() => toast.error("Gagal menyalin link."))
  }

  const generateMessage = (name: string) => {
    const invitationLink = generateInvitationLink(name)
    return text
      .replace(/\[nama\]/g, name)
      .replace(/\[link-undangan\]/g, invitationLink)
  }

  const copyToClipboard = (name: string) => {
    navigator.clipboard
      .writeText(generateMessage(name))
      .then(() => toast.success("Kata pengantar berhasil disalin!"))
      .catch(() => toast.error("Gagal menyalin kata pengantar."))
  }

  const handleDelete = async (id: number) => {
    const loadingToast = toast.info("Menghapus data...")
    const { error } = await supabase.from("visitors_jsr").delete().eq("id", id)

    if (error) {
      toast.update(loadingToast, {
        render: `Gagal menghapus data: ${error.message}`,
        type: "error",
        isLoading: false,
      })
    } else {
      toast.update(loadingToast, {
        render: "Data berhasil dihapus!",
        type: "success",
        isLoading: false,
      })
      fetchVisitors?.()
    }
  }

  useEffect(() => {
    ;(fetchVisitors(),
      fetch("/api/visitors")
        .then(res => res.json())
        .then(data => {
          setVisitors(data)
          setLoading(false)
        })
        .catch(() => setLoading(false)))
  }, [])

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mt-10 mb-8 flex flex-col px-10">
        <p className="text-center text-3xl font-bold">
          Kirim Undangan Untuk Para Tamu
        </p>
      </div>

      <div className="flex justify-center">
        <div className="mb-8 flex flex-col gap-1 px-10">
          <p className="mb-3">Petunjuk:</p>
          <div className="flex flex-col gap-2">
            <ItemInstruksi text="Masukkan nama tamu undangan pada kolom nama-jabatan. Pisahkan antar nama dengan baris baru (enter)." />
            <ItemInstruksi text="Tidak ada batasan dalam memasukkan nama, yang penting mengikuti format dengan baik." />
            <ItemInstruksi text="Masukkan teks pengantar sesuai dengan kebutuhan." />
            <ItemInstruksi text="Tambahkan shortcode [link-undangan] untuk menyisipkan link undangan ke dalam teks pengantar." />
            <ItemInstruksi text="Tambahkan shortcode [nama] untuk menyisipkan nama tamu yang akan di undang kedalam teks pengantar." />
            <ItemInstruksi text="Klik Buat Undangan jika sudah melakukan pengisian untuk mendapatkan link undangan yang akan dikirimkan." />
            <ItemInstruksi text="Klik tombol Share ke Whatsapp untuk mengirimkan undangan ke kontak whatsapp tamu yang akan diundang." />
            <ItemInstruksi text="Dan anda pun bisa menghapus kolom yang di generate dengan menekan tombol hapus." />
          </div>
        </div>
      </div>

      <div className="mb-5 flex justify-center px-8">
        <p className="w-full text-center text-sm font-semibold">
          Buat undangan jadi lebih ekslusif dan personal di setiap undangan yang
          akan dikirimkan. <br />
          Silahkan Generate Link nya di bawah ini:
        </p>
      </div>

      <div className="mb-10 flex justify-center">
        <div className="flex w-[80%] flex-col gap-3 rounded-2xl border border-gray-300 px-5 py-2 text-xs md:w-fit md:text-base xl:min-w-4xl">
          <p>Silahkan Masukkan Nama Tamu</p>
          <div className="italic">
            <p>
              * Gunakan baris baru (↵) untuk memisahkan nama yang akan Anda
              undang.
            </p>
            <p>* Gunakan strip (-) untuk memisahkan nama dengan jabatan.</p>
          </div>
          <div className="flex gap-1 text-red-600 italic">
            <p>contoh: </p>
            <div className="flex flex-col">
              <p>Agus Sucipto-Staff</p>
              <p>Bambang-HRD</p>
            </div>
          </div>
          <textarea
            required
            rows={5}
            className="textarea"
            placeholder="Nama-Jabatan"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <p>Silahkan Masukan Text Pengantar</p>
          <div className="italic">
            <p>* Gunakan [link-undangan] agar otomatis tercantum link.</p>
            <p>* Gunakan [nama] untuk menyertakan nama.</p>
          </div>
          <textarea
            rows={6}
            className="textarea whitespace-pre-wrap"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="kata pengantar"
          />

          <button
            onClick={handleSubmit}
            className="btn w-fit bg-green-500 px-10"
          >
            <p>Buat Undangan</p>
          </button>
        </div>
      </div>

      <div className="mb-10 flex justify-center">
        <div className="flex w-[80%] flex-col gap-2 rounded-2xl border border-gray-300 px-5 py-7 text-xs md:w-fit md:text-base xl:min-w-4xl">
          <p className="font-bold">Daftar Nama Undangan</p>
          <div className="flex justify-end gap-1">
            <Modal />
            <button
              className="btn rounded-4xl bg-blue-500 text-white lg:rounded-[5px]"
              onClick={fetchVisitors}
            >
              {loading ? (
                <span className="loading loading-spinner loading-md" />
              ) : (
                <>
                  <Image
                    src="/assets/reload.svg"
                    width={20}
                    height={20}
                    alt="reload"
                  />
                  <p className="hidden lg:block">Reload</p>
                </>
              )}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th>No</th>
                  <th>Nama</th>
                  <th>Jabatan</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : currentRows.length > 0 ? (
                  currentRows.map((visitor, index) => (
                    <tr
                      key={visitor.id}
                      className={
                        visitor.presence === "Hadir"
                          ? "bg-green-100"
                          : visitor.presence === "Tidak Hadir"
                            ? "bg-red-100"
                            : ""
                      }
                    >
                      <th>{index + 1}</th>
                      <td>{visitor.name}</td>
                      <td>{visitor.position}</td>
                      <td className="flex w-[240px] flex-wrap gap-2 lg:w-full">
                        <button
                          onClick={() => handleWhatsAppShare(visitor)}
                          className="btn btn-sm col-span-1 flex items-center rounded-4xl bg-green-500 text-white lg:rounded-[5px]"
                        >
                          <Image
                            src="/assets/whatsapp.svg"
                            width={20}
                            height={20}
                            alt="reload"
                          />
                          <p className="hidden lg:block">Share ke WhatsApp</p>
                        </button>

                        <button
                          onClick={() => handleCopyLink(visitor.name)}
                          className="btn btn-sm col-span-1 flex items-center rounded-4xl bg-slate-900 text-white lg:rounded-[5px]"
                        >
                          <Image
                            src="/assets/link.svg"
                            width={20}
                            height={20}
                            alt="reload"
                          />
                          <p className="hidden lg:block">Copy Link</p>
                        </button>

                        <button
                          onClick={() => copyToClipboard(visitor.name)}
                          className="btn btn-sm col-span-1 flex items-center rounded-4xl bg-gray-500 text-white lg:rounded-[5px]"
                        >
                          <Image
                            src="/assets/copy.svg"
                            width={20}
                            height={20}
                            alt="reload"
                          />
                          <p className="hidden lg:block">Copy kata pengantar</p>
                        </button>

                        <button
                          onClick={() => handleDelete(visitor.id)}
                          className="btn btn-sm col-span-1 flex items-center rounded-4xl bg-red-600 text-white lg:rounded-[5px]"
                        >
                          <Image
                            src="/assets/delete.svg"
                            width={20}
                            height={20}
                            alt="delete"
                          />
                          <p className="hidden lg:block">Delete</p>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center">
                      Tidak ada data
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="join mt-4 flex justify-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`join-item btn ${
                  currentPage === i + 1 ? "btn-active" : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
