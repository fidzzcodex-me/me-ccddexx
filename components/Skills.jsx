import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionHeading from '@/components/SectionHeading'
import StatusBadge from '@/components/StatusBadge'
import { skills } from '@/lib/site'

export default function Skills() {
  const track = [...skills, ...skills]

  return (
    <section id="keahlian" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="~/keahlian"
          title="Keahlian Utama"
          text="Fokus pada Node.js dan pengembangan bot di tiga platform populer, sambil terus memperdalam detail teknis yang masih perlu diasah."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skills.map((item, position) => (
            <article
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={(position % 2) * 120}
              className="group flex gap-5 rounded-3xl border border-line bg-surface p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-500 hover:-translate-y-1.5 hover:border-white/15"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-black/40 text-white transition duration-500 group-hover:text-green-400">
                <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center" data-aos="fade-up">
          <StatusBadge status="building">Terus belajar dan berkembang</StatusBadge>
        </div>

        <div className="mask-fade-x mt-12 overflow-hidden" data-aos="fade-up" aria-hidden="true">
          <div className="flex w-max animate-marquee gap-4">
            {track.map((item, position) => (
              <span
                key={`${item.title}-${position}`}
                className="flex items-center gap-3 rounded-full border border-line bg-surface px-5 py-2.5 font-mono text-sm text-zinc-400"
              >
                <FontAwesomeIcon icon={item.icon} className="h-4 w-4 text-zinc-300" />
                {item.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
