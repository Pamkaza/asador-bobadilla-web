import { Phone } from 'lucide-react';
import { useEffect } from 'react';

export default function Reservations() {
  useEffect(() => {
    // Cargar script de TidyCal si es necesario
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
          {/* TidyCal Embed - Placeholder */}
          <div className="card-dark p-8 mb-8">
            <div className="bg-[#1a1a1a] rounded-sm p-8 text-center mb-6">
              <p className="text-[#d4a96a] mb-4">
                Widget de reservas de TidyCal
              </p>
              <p className="text-[#b8b8b8] text-sm">
                Reemplaza <code className="bg-[#3a3a3a] px-2 py-1 rounded">YOUR_TIDYCAL_USERNAME</code> con tu usuario real en el código
              </p>
              <div className="mt-4 p-4 bg-[#3a3a3a] rounded-sm text-left overflow-x-auto">
                <code className="text-[#d4a96a] text-xs">
                  &lt;div class="tidycal-embed" data-path="YOUR_TIDYCAL_USERNAME/reserva-mesa"&gt;&lt;/div&gt;
                </code>
              </div>
            </div>

            {/* Alternative Contact Info */}
            <div className="border-t border-[#3a3a3a] pt-8">
              <h3 className="font-playfair font-bold text-[#f5f0e8] text-xl mb-6">
                ¿Prefieres llamar?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-[#c8622a] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="text-[#f5f0e8] font-semibold mb-1">Teléfono</p>
                    <p className="text-[#d4a96a] text-lg font-bold">
                      +34 XXX XXX XXX
                    </p>
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
                <span className="text-[#d4a96a]">Lunes a Viernes</span>
                <span className="text-[#f5f0e8] font-semibold">13:00 - 16:00 | 20:00 - 23:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#d4a96a]">Sábado y Domingo</span>
                <span className="text-[#f5f0e8] font-semibold">13:00 - 16:30 | 20:00 - 23:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
