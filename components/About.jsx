import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SectionHeading from '@/components/SectionHeading'
import { strengths } from '@/lib/site'

export default function About() {
  return (
    <section id="tentang" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="~/tentang"
          title="Developer yang Terus Bertumbuh"
          text="Saya adalah developer muda yang belajar langsung dari kesalahan. Setiap kendala saya jadikan bahan pembelajaran, dan saya terus mencoba hingga solusinya berhasil. Ketika menemui jalan buntu, saya tidak mudah menyerah dan selalu berupaya memberikan hasil terbaik secara maksimal."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {strengths.map((item, position) => (
            <article
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={position * 120}
              className="group rounded-3xl border border-line bg-surface p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-500 hover:-translate-y-1.5 hover:border-white/15"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-black/40 text-green-400 transition duration-500 group-hover:scale-110">
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
