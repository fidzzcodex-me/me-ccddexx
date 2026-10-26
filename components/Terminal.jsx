'use client'

import { useEffect, useRef, useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/Button'
import { goals, profile, skills, socials } from '@/lib/site'

const commands = {
  help: () => [
    'help      daftar perintah',
    'about     tentang saya',
    'skills    keahlian',
    'goals     tujuan',
    'contact   kontak',
    'clear     bersihkan layar',
  ],
  about: () => [profile.summary],
  skills: () => skills.map((item) => `- ${item.title}`),
  goals: () => goals.map((item) => `- ${item.title}`),
  contact: () =>
    socials.map((item) => `${item.label}: ${item.href.replace(/^(https:\/\/|mailto:)/, '')}`),
}

const shortcuts = ['help', 'about', 'skills', 'contact']

export default function Terminal() {
  const [lines, setLines] = useState([
    { type: 'out', text: 'Selamat datang. Ketik "help" untuk melihat daftar perintah.' },
  ])
  const [value, setValue] = useState('')
  const screen = useRef(null)

  useEffect(() => {
    if (screen.current) screen.current.scrollTop = screen.current.scrollHeight
  }, [lines])

  const run = (raw) => {
    const command = raw.trim().toLowerCase().slice(0, 40)
    if (!command) return

    if (command === 'clear') {
      setLines([])
      return
    }

    const handler = commands[command]
    const output = handler
      ? handler().map((text) => ({ type: 'out', text }))
      : [{ type: 'err', text: `perintah tidak dikenal: ${command}. Ketik "help".` }]

    setLines((previous) => [...previous, { type: 'in', text: command }, ...output].slice(-60))
  }

  const submit = (event) => {
    event.preventDefault()
    run(value)
    setValue('')
  }

  return (
    <section id="terminal" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="~/terminal"
          index="04"
          title="Coba Terminal Interaktif"
          text="Ketik perintah atau pilih pintasan di bawah untuk mengenal saya lebih jauh."
        />

        <div
          className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 border-b border-line bg-black/40 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" aria-hidden="true" />
            <span className="ml-3 font-mono text-xs text-zinc-500">{profile.handle}@portfolio: ~</span>
          </div>

          <div
            ref={screen}
            className="h-72 space-y-1.5 overflow-y-auto p-5 font-mono text-sm"
            aria-live="polite"
          >
            {lines.map((line, position) => (
              <p
                key={position}
                className={`whitespace-pre-wrap break-words ${
                  line.type === 'in' ? 'text-white' : line.type === 'err' ? 'text-red-400' : 'text-zinc-400'
                }`}
              >
                {line.type === 'in' ? <span className="mr-2 text-green-400">$</span> : null}
                {line.text}
              </p>
            ))}
          </div>

          <form onSubmit={submit} className="flex items-center gap-3 border-t border-line px-5 py-3 transition duration-300 focus-within:bg-white/[0.04]">
            <label htmlFor="terminal-input" className="font-mono text-sm text-green-400">
              $
            </label>
            <input
              id="terminal-input"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              maxLength={40}
              autoComplete="off"
              autoCapitalize="none"
              spellCheck={false}
              placeholder="ketik perintah"
              className="w-full bg-transparent font-mono text-base text-white placeholder:text-zinc-600 focus:outline-none"
            />
          </form>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3" data-aos="fade-up">
          {shortcuts.map((command) => (
            <Button key={command} variant="secondary" onClick={() => run(command)} className="!px-5 !py-2 font-mono">
              {command}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
