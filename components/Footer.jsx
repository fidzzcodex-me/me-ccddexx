import Link from 'next/link'
import { profile } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} <span className="font-mono">{profile.handle}</span>. Seluruh hak
          dilindungi.
        </p>
        <Link href="/privacy" className="transition duration-300 hover:text-white">
          Kebijakan Privasi
        </Link>
      </div>
    </footer>
  )
}
