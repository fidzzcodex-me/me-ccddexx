'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTerminal, faXmark } from '@fortawesome/free-solid-svg-icons'
import { navLinks, profile } from '@/lib/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-4 top-4 z-50 mx-auto max-w-5xl">
      <nav
        aria-label="Navigasi utama"
        className="flex items-center justify-between rounded-full border border-line bg-black/60 px-5 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl"
      >
        <a href="#beranda" className="flex items-center gap-2 font-mono text-sm text-white">
          <FontAwesomeIcon icon={faTerminal} className="h-4 w-4 text-green-400" />
          {profile.handle}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-zinc-400 transition duration-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-zinc-300 transition duration-300 hover:bg-white/5 md:hidden"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-4 w-4" />
        </button>
      </nav>

      <div
        id="menu-mobile"
        className={`mt-3 origin-top rounded-3xl border border-line bg-surface/95 p-3 shadow-[0_4px_14px_rgba(0,0,0,0.4)] backdrop-blur-xl transition duration-300 md:hidden ${
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-zinc-300 transition duration-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
