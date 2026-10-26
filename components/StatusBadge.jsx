const styles = {
  ready: 'text-green-400 bg-green-500/10 border-green-500/20',
  error: 'text-red-400 bg-red-500/10 border-red-500/20',
  building: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20 animate-pulse',
}

const dots = {
  ready: 'bg-green-400',
  error: 'bg-red-400',
  building: 'bg-yellow-400',
}

export default function StatusBadge({ status = 'ready', children }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider ${styles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[status]}`} aria-hidden="true" />
      {children}
    </span>
  )
}
