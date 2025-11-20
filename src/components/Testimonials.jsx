import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Hasil nyata dalam 8 minggu — pengalaman terbaik.',
    name: 'Raka',
    role: 'Entrepreneur'
  },
  {
    quote: 'Pelatihnya benar-benar elite. Worth every second.',
    name: 'Aulia',
    role: 'Creative Director'
  },
  {
    quote: 'Fasilitas dan vibe-nya kelas dunia.',
    name: 'Ferry',
    role: 'Consultant'
  }
]

function Testimonials() {
  return (
    <section className="relative bg-black py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Cerita Member
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-white/10" />
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-white/50 text-sm">{t.role}</div>
                </div>
              </div>
              <p className="mt-5 text-white/80 italic">“{t.quote}”</p>
              <div className="mt-4 text-yellow-400">★★★★★</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
