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
      {/* SEO Meta via document head handled in index.html; content copy in Bahasa */}
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
