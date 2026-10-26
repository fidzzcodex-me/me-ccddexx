import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Goals from '@/components/Goals'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ChatDemo from '@/components/ChatDemo'
import Skills from '@/components/Skills'
import Terminal from '@/components/Terminal'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ChatDemo />
        <Terminal />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
