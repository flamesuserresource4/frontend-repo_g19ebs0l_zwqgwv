import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background cinematic video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1519311965067-36d3e5f1bb4c?q=80&w=1920&auto=format&fit=crop"
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-strong-man-lifting-weights-6104/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />
        {/* Emerald cinematic glow accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),transparent_40%)]" />
        <div className="absolute inset-0 pointer-events-none grain-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
              <p className="text-xs tracking-widest text-white/70 uppercase">Kramat Jati • Jakarta Timur</p>
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Join Fitness —
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-emerald-400">
                The Elite Training Experience
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80">
              Mega gym paling eksklusif di Kramat Jati. Dibuat untuk Anda yang serius ingin berubah.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#membership"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 text-sm font-semibold tracking-wider uppercase shadow-[0_10px_40px_-10px_rgba(16,185,129,0.8)] hover:shadow-[0_10px_50px_-10px_rgba(16,185,129,1)] transition-all duration-300"
              >
                Daftar VIP Free Trial
              </a>
              <a
                href="https://wa.me/6285776906952"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur px-8 py-4 text-sm font-semibold tracking-wider uppercase text-white hover:bg-white/10 transition-all"
              >
                Konsultasi Pribadi via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle parallax spotlight accents */}
      <div className="pointer-events-none absolute -right-40 top-20 h-64 w-64 rounded-full bg-emerald-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
    </section>
  )
}

export default Hero
