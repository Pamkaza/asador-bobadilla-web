export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/hero-carne-josper-bwTLe4PgGgvZqtR3MznewW.webp)',
        }}
      />

      {/* Overlay oscuro semitransparente */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#f5f0e8] mb-4 animate-fade-in">
          Fuego, Sabor y Tradición en cada Corte
        </h1>
        <p className="text-lg md:text-2xl text-[#d4a96a] mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Carnes a la brasa de primera calidad · Ogíjares, Granada
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('reservations')}
            className="btn-cta"
          >
            Reservar Mesa
          </button>
          <button
            onClick={() => scrollToSection('menu')}
            className="btn-secondary"
          >
            Ver Carta
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-[#c8622a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
