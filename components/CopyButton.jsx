'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button'

export default function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Button variant={copied ? 'success' : 'secondary'} onClick={copy} aria-live="polite">
      <FontAwesomeIcon icon={copied ? faCheck : faCopy} className="h-4 w-4" />
      {copied ? 'Tersalin' : label}
    </Button>
  )
}
