import Link from 'next/link'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium shadow-[0_4px_14px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] transition duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40'

const variants = {
  primary: 'bg-[#22272E] border border-white/10 text-white hover:bg-[#2D333B]',
  success: 'bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20',
  danger: 'bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20',
  secondary: 'bg-black border border-white/10 text-gray-400 hover:bg-[#111] hover:text-white',
  info: 'bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20',
  warning: 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 hover:bg-yellow-500/20',
}

export default function Button({
  href,
  variant = 'primary',
  external = false,
  className = '',
  children,
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (!href) {
    return (
      <button type="button" className={classes} {...rest}>
        {children}
      </button>
    )
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  )
}
