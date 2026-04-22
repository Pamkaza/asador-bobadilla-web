export default function About() {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/interior-restaurante-DrGuRS4oigrk8Ey6d45qFq.webp"
              alt="Interior del Asador Bobadilla"
              className="rounded-sm shadow-2xl w-full h-96 object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#f5f0e8] mb-6">
              Nuestra Historia
            </h2>

            <p className="text-lg text-[#d4a96a] mb-6 leading-relaxed">
              En Asador Bobadilla creemos que una buena carne merece tiempo, fuego auténtico y manos expertas. Nuestro maestro parrillero cuida cada corte en el Josper para que llegue a tu mesa en su punto perfecto. Todo es casero, nada es congelado.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-3xl text-[#c8622a]">•</span>
                <div>
                  <h3 className="font-playfair font-bold text-[#f5f0e8] text-lg">Cocina Casera</h3>
                  <p className="text-[#b8b8b8]">Recetas tradicionales preparadas con dedicación</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl text-[#c8622a]">•</span>
                <div>
                  <h3 className="font-playfair font-bold text-[#f5f0e8] text-lg">Carne Premium</h3>
                  <p className="text-[#b8b8b8]">Selección rigurosa de proveedores de confianza</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-3xl text-[#c8622a]">•</span>
                <div>
                  <h3 className="font-playfair font-bold text-[#f5f0e8] text-lg">Trato Familiar</h3>
                  <p className="text-[#b8b8b8]">Ambiente acogedor como estar en casa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
