import {
  faBullseye,
  faFire,
  faRotate,
  faCoins,
  faCode,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
  faDiscord,
  faGithub,
  faNodeJs,
  faTelegram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const githubUser = 'fidzzcodex-me'

export const profile = {
  handle: 'ccddexx',
  role: 'Developer Node.js',
  summary:
    'Developer muda yang belajar dari setiap kesalahan dan terus mencoba hingga solusi berhasil.',
  phrases: [
    'bot WhatsApp yang andal',
    'bot Telegram yang responsif',
    'bot Discord yang interaktif',
    'solusi Node.js yang rapi',
  ],
}

export const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Demo', href: '#demo' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Kontak', href: '#kontak' },
]

export const strengths = [
  {
    icon: faRotate,
    title: 'Belajar dari Kesalahan',
    text: 'Setiap kendala diperlakukan sebagai bahan pembelajaran untuk menghasilkan solusi yang lebih baik.',
  },
  {
    icon: faFire,
    title: 'Pantang Menyerah',
    text: 'Terus mencoba dan menyempurnakan pekerjaan, bahkan ketika proses sampai pada jalan buntu.',
  },
  {
    icon: faBullseye,
    title: 'Hasil Maksimal',
    text: 'Berkomitmen memberikan upaya terbaik pada setiap pekerjaan yang dipercayakan.',
  },
]

export const skills = [
  {
    icon: faNodeJs,
    title: 'Node.js',
    text: 'Fondasi utama untuk pengembangan backend, otomasi, dan logika aplikasi.',
  },
  {
    icon: faWhatsapp,
    title: 'Bot WhatsApp',
    text: 'Perancangan bot percakapan dan otomasi layanan pada platform WhatsApp.',
  },
  {
    icon: faTelegram,
    title: 'Bot Telegram',
    text: 'Pengembangan bot dengan perintah, alur interaksi, dan integrasi yang terstruktur.',
  },
  {
    icon: faDiscord,
    title: 'Bot Discord',
    text: 'Pembuatan bot komunitas dengan fitur interaktif dan pengelolaan server.',
  },
]

export const goals = [
  {
    icon: faCode,
    title: 'Programmer Andal',
    text: 'Berkembang secara konsisten hingga menjadi programmer hebat dengan fondasi teknis yang kuat.',
  },
  {
    icon: faCoins,
    title: 'Dampak Ekonomi',
    text: 'Menghasilkan penghasilan dari keahlian yang dimiliki untuk membantu perekonomian.',
  },
]

export const socials = [
  { label: 'GitHub', icon: faGithub, href: 'https://github.com/fidzzcodex-me', variant: 'info' },
  { label: 'Gmail', icon: faEnvelope, href: 'mailto:cscodexxx@gmail.com', variant: 'primary' },
]

export const chatDemos = {
  whatsapp: {
    label: 'WhatsApp',
    icon: faWhatsapp,
    title: 'Bot WhatsApp',
    messages: [
      { from: 'user', text: '.menu' },
      { from: 'bot', text: 'Menu tersedia:\n1. Info\n2. Bantuan\n3. Status' },
      { from: 'user', text: '.status' },
      { from: 'bot', text: 'Bot aktif dan siap digunakan.' },
    ],
  },
  telegram: {
    label: 'Telegram',
    icon: faTelegram,
    title: 'Bot Telegram',
    messages: [
      { from: 'user', text: '/start' },
      { from: 'bot', text: 'Selamat datang. Gunakan /help untuk melihat perintah.' },
      { from: 'user', text: '/help' },
      { from: 'bot', text: 'Perintah:\n/start\n/help\n/status' },
    ],
  },
  discord: {
    label: 'Discord',
    icon: faDiscord,
    title: 'Bot Discord',
    messages: [
      { from: 'user', text: '/ping' },
      { from: 'bot', text: 'Pong. Bot berjalan normal.' },
      { from: 'user', text: '/help' },
      { from: 'bot', text: 'Gunakan slash command untuk berinteraksi dengan server.' },
    ],
  },
}
