import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import AskAI from '@/components/AskAI'
import About from '@/components/About'

export default function HomePage() {
  return (
    <main className="bg-cosmic-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <AskAI />
    </main>
  )
}
