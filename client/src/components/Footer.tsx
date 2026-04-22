export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#0d0d0d] border-t border-[#3a3a3a] py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🔥</div>
              <h3 className="text-xl font-bold font-playfair text-[#c8622a]">
                Asador Bobadilla
              </h3>
            </div>
            <p className="text-[#b8b8b8] text-sm">
              Fuego, sabor y tradición en cada corte
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-[#f5f0e8] mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-[#d4a96a] hover:text-[#c8622a] transition-colors text-sm"
                >
                  Carta
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reservations')}
                  className="text-[#d4a96a] hover:text-[#c8622a] transition-colors text-sm"
                >
                  Reservas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-[#d4a96a] hover:text-[#c8622a] transition-colors text-sm"
                >
                  Galería
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('location')}
                  className="text-[#d4a96a] hover:text-[#c8622a] transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-bold text-[#f5f0e8] mb-4">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+34640386139" className="text-[#d4a96a] hover:text-[#c8622a] transition-colors">
                  📞 +34 640 38 61 39
                </a>
              </li>
              <li className="text-[#d4a96a]">
                📍 C. Río Beiro, 3
              </li>
              <li className="text-[#d4a96a]">
                18151 Ogíjares, Granada
              </li>
            </ul>
          </div>


        </div>

        {/* Divider */}
        <div className="divider-accent my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#b8b8b8]">
          <p>
            © 2025 Asador Bobadilla · Todos los derechos reservados
          </p>
          <p className="mt-4 md:mt-0 text-[#d4a96a]">
            Hecho con fuego y pasión en Ogíjares, Granada
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button (Mobile) */}
      <a
        href="https://wa.me/34640386139?text=Hola%2C%20quisiera%20reservar%20una%20mesa%20en%20Asador%20Bobadilla"
        className="fixed bottom-6 right-6 md:hidden bg-[#25d366] hover:bg-[#1fa855] text-white p-4 rounded-full shadow-lg transition-all z-40"
        title="WhatsApp"
      >
        <span className="text-2xl">💬</span>
      </a>
    </footer>
  );
}
