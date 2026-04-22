import { Phone } from 'lucide-react';
import { useEffect } from 'react';

export default function Reservations() {
  useEffect(() => {
    // Cargar script de TidyCal
    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="reservations" className="py-20 bg-[#2d2d2d]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#f5f0e8] mb-4 text-center">
          Reserva tu Mesa
        </h2>
        <p className="text-center text-[#d4a96a] mb-12 text-lg">
          Consulta disponibilidad en tiempo real y bloquea tu hora al instante
        </p>

        <div className="max-w-4xl mx-auto">
          {/* TidyCal Embed */}
          <div className="card-dark p-8 mb-8">
            <div className="tidycal-embed" data-path="marcopj2011/consultation" />

            {/* Contact Info */}
            <div className="border-t border-[#3a3a3a] pt-8">
              <h3 className="font-playfair font-bold text-[#f5f0e8] text-xl mb-6">
                ¿Prefieres llamar?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-[#c8622a] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-[#f5f0e8] font-semibold mb-1">Teléfono</p>
                    <a href="tel:+34640386139" className="text-[#d4a96a] text-lg font-bold hover:text-[#c8622a] transition-colors">
                      +34 640 38 61 39
                    </a>
                    <p className="text-[#b8b8b8] text-sm mt-2">
                      Disponible en horario de apertura
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-[#c8622a] mt-1 flex-shrink-0 text-2xl">📍</div>
                  <div>
                    <p className="text-[#f5f0e8] font-semibold mb-1">Ubicación</p>
                    <p className="text-[#d4a96a]">
                      Ogíjares, Granada
                    </p>
                    <p className="text-[#b8b8b8] text-sm mt-2">
                      Consulta el mapa más abajo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horario */}
          <div className="card-dark p-8">
            <h3 className="font-playfair font-bold text-[#f5f0e8] text-xl mb-6">
              Horario de Apertura
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#d4a96a]">Miércoles a Domingo</span>
                <span className="text-[#f5f0e8] font-semibold">12:30 - 17:30 | 20:00 - 24:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#d4a96a]">Lunes y Martes</span>
                <span className="text-[#c8622a] font-semibold">Cerrado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
