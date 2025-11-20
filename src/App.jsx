import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Facilities from './components/Facilities'
import Programs from './components/Programs'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-[Inter]">
      {/* Background accent in emerald for the whole site */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(5,150,105,0.06),transparent_60%)]" />
      </div>
      <Hero />
      <Philosophy />
      <Facilities />
      <Programs />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
