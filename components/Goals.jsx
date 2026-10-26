import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionHeading from '@/components/SectionHeading'
import { goals } from '@/lib/site'

export default function Goals() {
  return (
    <section id="tujuan" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="~/tujuan"
          index="05"
          title="Arah ke Depan"
          text="Cita-cita saya adalah menjadi programmer hebat dan menghasilkan penghasilan yang dapat membantu perekonomian."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          {goals.map((item, position) => (
            <article
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={position * 150}
              className="rounded-3xl border border-line bg-surface p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-500 hover:-translate-y-1.5 hover:border-green-500/20 hover:shadow-[0_0_40px_rgba(74,222,128,0.07)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-400">
                <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
