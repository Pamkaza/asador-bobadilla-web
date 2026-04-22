import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#f5f0e8] mb-4 text-center">
          Ubicación y Contacto
        </h2>
        <p className="text-center text-[#d4a96a] mb-12 text-lg">
          Visítanos en Ogíjares, Granada
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-sm overflow-hidden shadow-2xl h-96 md:h-full min-h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.5234567890123!2d-3.6234567!3d37.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAsador%20Bobadilla%20Og%C3%ADjares!5e0!3m2!1ses!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="card-dark p-6 hover:border-[#c8622a] transition-all">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#c8622a] mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-playfair font-bold text-[#f5f0e8] text-lg mb-2">
                    Dirección
                  </h3>
                  <p className="text-[#d4a96a] text-lg font-semibold">
                    Ogíjares, Granada
                  </p>
                  <p className="text-[#b8b8b8] text-sm mt-1">
                    [Dirección exacta a completar]
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="card-dark p-6 hover:border-[#c8622a] transition-all">
              <div className="flex items-start gap-4">
                <Phone className="text-[#c8622a] mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-playfair font-bold text-[#f5f0e8] text-lg mb-2">
                    Teléfono
                  </h3>
                  <a href="tel:+34XXXXXXXXX" className="text-[#d4a96a] text-lg font-semibold hover:text-[#c8622a] transition-colors">
                    +34 XXX XXX XXX
                  </a>
                  <p className="text-[#b8b8b8] text-sm mt-1">
                    Llamadas de lunes a domingo
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="card-dark p-6 hover:border-[#c8622a] transition-all">
              <div className="flex items-start gap-4">
                <Mail className="text-[#c8622a] mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-playfair font-bold text-[#f5f0e8] text-lg mb-2">
                    Email
                  </h3>
                  <a href="mailto:info@asadorbobadilla.com" className="text-[#d4a96a] font-semibold hover:text-[#c8622a] transition-colors">
                    info@asadorbobadilla.com
                  </a>
                  <p className="text-[#b8b8b8] text-sm mt-1">
                    Responderemos en breve
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="card-dark p-6 hover:border-[#c8622a] transition-all">
              <div className="flex items-start gap-4">
                <Clock className="text-[#c8622a] mt-1 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-playfair font-bold text-[#f5f0e8] text-lg mb-3">
                    Horario
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#b8b8b8]">L-V</span>
                      <span className="text-[#d4a96a]">13:00-16:00 | 20:00-23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#b8b8b8]">S-D</span>
                      <span className="text-[#d4a96a]">13:00-16:30 | 20:00-23:30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
