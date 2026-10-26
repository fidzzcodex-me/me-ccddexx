import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Goals from '@/components/Goals'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
