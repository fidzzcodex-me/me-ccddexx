'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@/components/Button'
import SectionHeading from '@/components/SectionHeading'
import { chatDemos } from '@/lib/site'

export default function ChatDemo() {
  const [active, setActive] = useState('whatsapp')
  const [count, setCount] = useState(0)
  const demo = chatDemos[active]
  const total = demo.messages.length

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(total)
      return undefined
    }

    setCount(0)
    let current = 0
    const timer = setInterval(() => {
      current += 1
      setCount(current)
      if (current >= total) clearInterval(timer)
    }, 1100)

    return () => clearInterval(timer)
  }, [active, total])

  const typing = count < total && demo.messages[count].from === 'bot'

  return (
    <section id="demo" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="~/demo"
          index="03"
          title="Simulasi Interaksi Bot"
          text="Contoh alur percakapan pada tiga platform. Ini simulasi untuk menggambarkan cara kerja bot, bukan tangkapan layar proyek tertentu."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3" data-aos="fade-up">
          {Object.entries(chatDemos).map(([key, item]) => (
            <Button
              key={key}
              variant={active === key ? 'success' : 'secondary'}
              onClick={() => setActive(key)}
              aria-pressed={active === key}
              className="!px-5 !py-2.5"
            >
              <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>

        <div
          className="mx-auto mt-8 max-w-md overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="flex items-center gap-3 border-b border-line bg-black/40 px-5 py-3.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-400">
              <FontAwesomeIcon icon={demo.icon} className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-white">{demo.title}</p>
              <p className="font-mono text-xs text-green-400">online</p>
            </div>
          </div>

          <div className="flex h-80 flex-col gap-3 overflow-y-auto p-5" aria-live="polite">
            {demo.messages.slice(0, count).map((message, position) => (
              <p
                key={`${active}-${position}`}
                className={`max-w-[85%] whitespace-pre-line break-words rounded-2xl px-4 py-2.5 text-sm opacity-0 animate-line-in ${
                  message.from === 'user'
                    ? 'self-end border border-white/10 bg-[#22272E] text-white'
                    : 'self-start border border-line bg-black text-zinc-300'
                }`}
              >
                {message.text}
              </p>
            ))}
            {typing ? (
              <p className="flex w-fit gap-1.5 self-start rounded-2xl border border-line bg-black px-4 py-3" aria-label="Bot sedang mengetik">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    style={{ animationDelay: `${dot * 0.2}s` }}
                    className="h-1.5 w-1.5 rounded-full bg-zinc-500 animate-float"
                  />
                ))}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
