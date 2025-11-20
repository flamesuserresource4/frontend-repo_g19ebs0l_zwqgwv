import { Dumbbell, GaugeCircle, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

function Philosophy() {
  const items = [
    {
      icon: <GaugeCircle className="h-6 w-6" />,
      title: 'Precision Training',
      desc: 'Pendekatan berbasis data untuk hasil yang akurat dan berkelanjutan.'
    },
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: 'State-of-the-Art Equipment',
      desc: 'Peralatan premium kelas dunia untuk performa maksimal.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Elite Coaching Standard',
      desc: 'Tim pelatih tersertifikasi dengan standar internasional.'
    }
  ]

  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="relative container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Filosofi Kami
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-3xl text-lg text-white/70"
        >
          Join Fitness bukan hanya gym. Ini adalah ruang untuk transformasi, disiplin, dan dedikasi. Dirancang untuk mereka yang menginginkan kualitas, bukan sekadar fasilitas.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:from-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 text-red-400 ring-1 ring-red-500/20">
                  {it.icon}
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">{it.title}</h3>
                  <p className="text-white/70 text-sm mt-1">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Philosophy
