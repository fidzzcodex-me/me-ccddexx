'use client'

import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button'
import StatusBadge from '@/components/StatusBadge'

export default function Guard() {
  const pathname = usePathname()

  const lines = [
    { text: 'memeriksa permintaan masuk...', tone: 'text-zinc-400' },
    { text: `jalur "${pathname}" tidak tersedia`, tone: 'text-yellow-400' },
    { text: 'akses ke berkas privat ditolak', tone: 'text-red-400' },
    { text: 'aktivitas pemindaian dicatat', tone: 'text-red-400' },
  ]

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-16">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-red-500/[0.07] blur-3xl animate-orb"
        aria-hidden="true"
      />

      <section className="relative w-full max-w-xl text-center">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-red-500/30 animate-ring" aria-hidden="true" />
          <span
            className="absolute inset-0 rounded-full border border-red-500/30 animate-ring [animation-delay:1.2s]"
            aria-hidden="true"
          />
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-red-400 shadow-[0_4px_14px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] animate-float">
            <FontAwesomeIcon icon={faShieldHalved} className="h-9 w-9" />
          </span>
        </div>

        <div className="mt-6 flex justify-center">
          <StatusBadge status="error">404 Akses Ditolak</StatusBadge>
        </div>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Area Ini Dijaga
        </h1>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-zinc-400">
          Halaman yang Anda cari tidak ditemukan, dan berkas internal situs ini tidak dapat diakses.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-surface text-left shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="border-b border-line bg-black/40 px-5 py-3 font-mono text-xs text-zinc-500">
            penjaga@portfolio: ~/gerbang
          </div>
          <div className="space-y-2 p-5 font-mono text-sm">
            {lines.map((line, position) => (
              <p
                key={line.text}
                style={{ animationDelay: `${0.3 + position * 0.55}s` }}
                className={`break-all opacity-0 animate-line-in ${line.tone}`}
              >
                <span className="mr-2 text-zinc-600">[penjaga]</span>
                {line.text}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary">
            <FontAwesomeIcon icon={faArrowLeft} className="h-3.5 w-3.5" />
            Kembali ke Beranda
          </Button>
        </div>
      </section>
    </main>
  )
}
