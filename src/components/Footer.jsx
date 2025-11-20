function Footer() {
  return (
    <footer className="relative bg-black py-16 border-top border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-2xl font-extrabold tracking-widest text-white">JOIN FITNESS</div>
            <div className="mt-2 text-white/60">Kramat Jati, Jakarta Timur</div>
          </div>
          <div className="flex items-center gap-6 text-white/70">
            <a href="https://wa.me/6285776906952" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#map" className="hover:text-white">Map</a>
          </div>
        </div>
        <div id="map" className="mt-10 overflow-hidden rounded-xl border border-white/10">
          <iframe
            title="Join Fitness Map"
            src="https://www.google.com/maps?q=Kramat+Jati,+Jakarta&output=embed"
            className="w-full h-60"
            loading="lazy"
          />
        </div>
        <p className="mt-8 text-xs text-white/40">© {new Date().getFullYear()} Join Fitness. All rights reserved.</p>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6285776906952"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white px-5 py-3 shadow-lg hover:shadow-xl transition-shadow"
      >
        <span className="h-2 w-2 rounded-full bg-white" /> Concierge VIP
      </a>
    </footer>
  )
}

export default Footer
