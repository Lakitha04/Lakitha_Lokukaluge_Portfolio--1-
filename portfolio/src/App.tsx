import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BeltDivider from './components/BeltDivider'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <BeltDivider />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <BeltDivider />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
