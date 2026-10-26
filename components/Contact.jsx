import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@/components/Button'
import { profile, socials } from '@/lib/site'

export default function Contact() {
  return (
    <section id="kontak" className="px-5 py-24">
      <div
        className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]"
        data-aos="fade-up"
      >
        <div className="border-b border-line bg-black/40 px-6 py-3 font-mono text-xs text-zinc-500">
          {profile.handle}@portfolio: ~/kontak
        </div>
        <div className="p-8 text-center sm:p-12">
          <p className="font-mono text-sm text-green-400">$ ./hubungi --kolaborasi</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Mari Bekerja Sama
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-zinc-400">
            Tertarik membangun bot atau solusi berbasis Node.js? Hubungi saya melalui kanal berikut.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {socials.map((item) => (
              <Button key={item.label} href={item.href} variant={item.variant} external={item.href.startsWith('http')}>
                <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
