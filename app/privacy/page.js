import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faLock } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button'
import { profile } from '@/lib/site'

export const metadata = {
  title: `Kebijakan Privasi - ${profile.handle}`,
  description: 'Penjelasan mengenai data yang diproses oleh situs portofolio ini.',
}

const sections = [
  {
    title: 'Data yang Dikumpulkan',
    text: 'Situs ini tidak menyediakan formulir, akun pengguna, maupun kolom input. Kami tidak mengumpulkan data pribadi secara langsung dari pengunjung.',
  },
  {
    title: 'Cookie dan Pelacakan',
    text: 'Situs ini tidak memasang cookie pelacak, piksel iklan, maupun layanan analitik pihak ketiga.',
  },
  {
    title: 'Log Server',
    text: 'Penyedia hosting dapat mencatat data teknis standar seperti alamat IP, jenis peramban, dan waktu akses untuk menjaga keamanan dan stabilitas layanan.',
  },
  {
    title: 'Tautan Eksternal',
    text: 'Situs ini memuat tautan ke layanan pihak ketiga seperti GitHub dan Gmail. Kebijakan privasi layanan tersebut berada di luar kendali kami.',
  },
  {
    title: 'Keamanan',
    text: 'Situs menerapkan header keamanan, pembatasan sumber konten, dan penjagaan terhadap akses ke berkas internal untuk mengurangi risiko eksploitasi.',
  },
  {
    title: 'Perubahan Kebijakan',
    text: 'Kebijakan ini dapat diperbarui sewaktu-waktu. Versi terbaru selalu tersedia pada halaman ini.',
  },
]

export default function PrivacyPage() {
  return (
    <main className="px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="font-mono text-sm text-green-400">
          {profile.handle}
        </Link>
        <div className="mt-6 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-400">
            <FontAwesomeIcon icon={faLock} className="h-5 w-5" />
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Kebijakan Privasi
          </h1>
        </div>

        <div className="mt-10 space-y-5">
          {sections.map((item) => (
            <section
              key={item.title}
              className="rounded-3xl border border-line bg-surface p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
            </section>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/" variant="secondary">
            <FontAwesomeIcon icon={faArrowLeft} className="h-3.5 w-3.5" />
            Kembali
          </Button>
        </div>
      </div>
    </main>
  )
}
