import { motion } from 'framer-motion'

const images = [
  {
    title: 'Strength Arena',
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
    desc: 'Ruang beban dengan pencahayaan spotlight untuk intensitas maksimal.'
  },
  {
    title: 'Cardio Stage',
    src: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?q=80&w=1600&auto=format&fit=crop',
    desc: 'Zona kardio sinematik dengan suasana seperti panggung.'
  },
  {
    title: 'Elite PT Zone',
    src: 'https://images.unsplash.com/photo-1710161972143-b7dad0dde15e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGl0ZSUyMFBUJTIwWm9uZXxlbnwwfDB8fHwxNzYzNjUyNjM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Area privat untuk sesi pelatihan personal kelas elite.'
  },
  {
    title: 'Studio Kelas',
    src: 'https://images.unsplash.com/photo-1540206276207-3af25c08abc4?q=80&w=1600&auto=format&fit=crop',
    desc: 'Ruang studio dengan akustik premium dan pencahayaan artistik.'
  },
  {
    title: 'Locker Room',
    src: 'https://images.unsplash.com/photo-1483861911361-57d334ad765b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMb2NrZXIlMjBSb29tfGVufDB8MHx8fDE3NjM2NTI2MzZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Ruang ganti bersih, modern, dengan detail material premium.'
  },
  {
    title: 'Parkiran Luas',
    src: 'https://images.unsplash.com/photo-1624542312320-306f53001122?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYXJraXJhbiUyMEx1YXN8ZW58MHwwfHx8MTc2MzY1MjYzNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    desc: 'Akses mudah dengan area parkir yang lega dan aman.'
  }
]

function Facilities() {
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
          Fasilitas Ultra-Premium
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/3]">
                <img src={item.src} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                <p className="text-white/70 text-sm mt-2 max-w-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities
