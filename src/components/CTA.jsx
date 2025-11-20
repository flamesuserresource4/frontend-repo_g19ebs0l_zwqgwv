import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="cta" className="relative bg-black py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent)] p-10 md:p-16 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_40%)]" />
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative text-3xl md:text-5xl font-bold text-white"
          >
            Siap Menaikkan Standar Hidup Anda?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mt-4 max-w-3xl text-white/70"
          >
            Daftar Sekarang & Rasakan Pengalaman Elite Join Fitness.
          </motion.p>
          <div className="relative mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#membership" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white">
              Mulai Perjalanan Anda
            </a>
            <a href="https://wa.me/6285776906952" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-white/10">
              Hubungi Concierge VIP
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
