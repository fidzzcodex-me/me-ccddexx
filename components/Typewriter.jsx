'use client'

import { useEffect, useState } from 'react'

export default function Typewriter({ phrases }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(phrases[0])
      return undefined
    }

    const current = phrases[index]
    const complete = !deleting && text === current
    const delay = complete ? 1800 : deleting ? 35 : 70

    const timer = setTimeout(() => {
      if (complete) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setIndex((index + 1) % phrases.length)
      } else {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index, phrases])

  return (
    <span className="inline-flex min-h-[1.75rem] items-center" aria-label={phrases[0]}>
      <span aria-hidden="true">{text}</span>
      <span aria-hidden="true" className="ml-1 inline-block h-5 w-2 bg-green-400 animate-blink" />
    </span>
  )
}
