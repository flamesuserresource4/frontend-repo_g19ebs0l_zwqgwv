import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Bronze',
    perks: ['Regular Access', 'Akses gym 7 hari', 'Locker shared'],
  },
  {
    name: 'Silver',
    perks: ['Full Access + Kelas', 'Semua kelas grup', 'Guest pass bulanan'],
  },
  {
    name: 'Gold VIP',
    perks: ['Priority Access', 'Diskon PT', 'Pemakaian Studio Priority'],
  },
  {
    name: 'Black Card',
    perks: ['Unlimited', 'VIP Lounge', 'Private PT Slot', 'Concierge'],
  },
]

function Pricing() {
  return (
    <section id="membership" className="relative bg-black py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Membership Tiers
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur ${t.name === 'Black Card' ? 'ring-1 ring-yellow-500/20' : ''}`}
            >
              {t.name === 'Black Card' && (
                <div className="absolute right-4 top-4 text-xs tracking-widest uppercase text-yellow-400">Ultra</div>
              )}
              <h3 className="text-white text-2xl font-semibold">{t.name}</h3>
              <ul className="mt-4 space-y-2">
                {t.perks.map((p, idx) => (
                  <li key={idx} className="text-white/70 text-sm flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]" /> {p}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                Become a Member
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
