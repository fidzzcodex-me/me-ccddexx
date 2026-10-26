export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
      <p className="font-mono text-sm text-green-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 leading-relaxed text-zinc-400">{text}</p> : null}
    </div>
  )
}
