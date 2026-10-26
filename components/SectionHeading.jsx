export default function SectionHeading({ eyebrow, title, text, index }) {
  return (
    <div className="relative mx-auto max-w-2xl text-center" data-aos="fade-up">
      {index ? (
        <span
          className="pointer-events-none absolute left-1/2 -top-12 -z-10 -translate-x-1/2 select-none font-mono text-[7rem] leading-none text-white/[0.035]"
          aria-hidden="true"
        >
          {index}
        </span>
      ) : null}
      <p className="font-mono text-sm text-green-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 leading-relaxed text-zinc-400">{text}</p> : null}
    </div>
  )
}
