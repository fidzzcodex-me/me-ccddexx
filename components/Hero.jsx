import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTerminal } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button'
import StatusBadge from '@/components/StatusBadge'
import Typewriter from '@/components/Typewriter'
import { profile } from '@/lib/site'

const terminalLines = [
  { prompt: true, text: 'whoami' },
  { text: profile.handle },
  { prompt: true, text: 'cat peran.txt' },
  { text: profile.role },
  { prompt: true, text: 'ls bot/' },
  { text: 'whatsapp  telegram  discord' },
  { prompt: true, text: 'node status.js' },
  { text: 'siap berkolaborasi', accent: true },
]

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-20 pt-32"
    >
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-white/[0.05] blur-3xl animate-orb"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-16 h-80 w-80 rounded-full bg-green-500/[0.07] blur-3xl animate-orb [animation-delay:-6s]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <div data-aos="fade-up">
            <StatusBadge status="ready">Terbuka untuk kolaborasi</StatusBadge>
          </div>

          <h1
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Halo, saya <span className="font-mono text-green-400">{profile.handle}</span>
          </h1>

          <p
            className="mt-5 font-mono text-base text-zinc-300 sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-zinc-500">$ membangun </span>
            <Typewriter phrases={profile.phrases} />
          </p>

          <p
            className="mt-6 max-w-xl leading-relaxed text-zinc-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap gap-3" data-aos="fade-up" data-aos-delay="400">
            <Button href="#kontak" variant="primary">
              Hubungi Saya
              <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
            </Button>
            <Button href="#keahlian" variant="secondary">
              Lihat Keahlian
            </Button>
          </div>
        </div>

        <div className="relative" data-aos="fade-up" data-aos-delay="300">
          <div className="animate-float overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="flex items-center gap-2 border-b border-line bg-black/40 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" aria-hidden="true" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" aria-hidden="true" />
              <span className="ml-3 flex items-center gap-2 font-mono text-xs text-zinc-500">
                <FontAwesomeIcon icon={faTerminal} className="h-3 w-3" />
                {profile.handle}@portfolio: ~
              </span>
            </div>

            <div className="relative min-h-[17rem] p-5 font-mono text-sm sm:p-6">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent animate-scan"
                aria-hidden="true"
              />
              {terminalLines.map((line, position) => (
                <p
                  key={position}
                  style={{ animationDelay: `${0.6 + position * 0.45}s` }}
                  className={`opacity-0 animate-line-in break-words ${
                    line.prompt ? 'mt-3 text-zinc-300' : line.accent ? 'text-green-400' : 'text-zinc-500'
                  }`}
                >
                  {line.prompt ? <span className="mr-2 text-green-400">$</span> : null}
                  {line.text}
                </p>
              ))}
              <p
                style={{ animationDelay: `${0.6 + terminalLines.length * 0.45}s` }}
                className="mt-3 opacity-0 animate-line-in text-zinc-300"
              >
                <span className="mr-2 text-green-400">$</span>
                <span className="inline-block h-4 w-2 translate-y-0.5 bg-zinc-300 animate-blink" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
