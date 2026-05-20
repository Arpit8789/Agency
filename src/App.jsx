import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ObjectionKiller from './components/ObjectionKiller'
import StatsBar from './components/StatsBar'
import Projects from './components/Projects'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Founders from './components/Founders'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="bg-primary min-h-screen relative">
      {/* Film grain noise texture */}
      <div className="noise-overlay" />
      
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <ObjectionKiller />
        <StatsBar />
        <Projects />
        <HowItWorks />
        <Pricing />
        <Founders />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
