import Guard from '@/components/Guard'

export const metadata = {
  title: '404 - Akses Ditolak',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return <Guard />
}
