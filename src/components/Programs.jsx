import { motion } from 'framer-motion'

const programs = [
  {
    title: 'Personal Training Elite',
    desc: 'Pendampingan 1:1 eksklusif untuk hasil tercepat dan terukur.',
  },
  {
    title: 'Strength Transformation Program',
    desc: 'Program 12 minggu untuk kekuatan, komposisi tubuh, dan performa.',
  },
  {
    title: 'HIIT Power Class',
    desc: 'Kelas intensitas tinggi dengan format signature berenergi.',
  },
  {
    title: 'Yoga Recovery Flow',
    desc: 'Mobilitas, napas, dan pemulihan mendalam pasca-latihan.',
  },
  {
    title: 'Women’s Tone Club',
    desc: 'Program kurasi khusus wanita untuk tone dan confidence.',
  },
  {
    title: 'Performance Conditioning',
    desc: 'Kondisi atletik, stamina, dan ketahanan puncak.',
  },
]

function Programs() {
  return (
    <section id="programs" className="relative bg-black py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Program Eksklusif
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur hover:from-white/10 transition-colors"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-white text-xl font-semibold pr-6">{p.title}</h3>
                <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.9)] mt-2" />
              </div>
              <p className="text-white/70 mt-3 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
