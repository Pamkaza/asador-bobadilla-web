import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: 'La comida de 10, destacando la carne al carbón, los huevos con gambas de cristal y la tarta al horno de 3 quesos. La atención profesional, atenta y cercana.',
    author: 'Granada Nazarí',
    rating: 5,
  },
  {
    text: 'Todo resultó espectacular, desde el servicio hasta la comida. Una paletilla de cordero al estilo de Aranda de Duero que estaba exquisita.',
    author: 'BADLAND IBEX',
    rating: 5,
  },
  {
    text: 'El entrecot quedó perfecto. El trato del personal 10/10 y la tarta de queso de las mejores que he probado. Gracias a Rosa y a todo el personal.',
    author: 'Babi Scott',
    rating: 5,
  },
  {
    text: 'Venir al Restaurante Asador Bobadilla es como estar en casa. El trato de Rosa, Pepe y su equipo es excepcional al igual que la calidad de sus platos.',
    author: 'Valentina S.',
    rating: 5,
  },
  {
    text: 'La carne está espectacular y el trato por parte de los trabajadores genial. Paco muy amable con mi familia inglesa, haciendo lo posible para comunicarse.',
    author: 'Cristina UH',
    rating: 5,
  },
  {
    text: 'Todo casero, nada de congelados. El maestro parrillero un 10: le pedimos la carne en su punto y trinchada, y así llegó.',
    author: 'Carlos Ramallo',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[#2d2d2d]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#f5f0e8] mb-4 text-center">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-center text-[#d4a96a] mb-12 text-lg">
          Reseñas de Google verificadas
        </p>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="card-dark p-8 md:p-12 min-h-64 flex flex-col justify-between">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <span key={i} className="text-[#c8622a] text-2xl">⭐</span>
              ))}
            </div>

            {/* Text */}
            <p className="text-[#f5f0e8] text-lg md:text-xl italic mb-6 leading-relaxed">
              "{testimonials[current].text}"
            </p>

            {/* Author */}
            <p className="text-[#d4a96a] font-semibold text-lg">
              — {testimonials[current].author}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 hover:bg-[#3a3a3a] rounded-full transition-colors text-[#c8622a]"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current ? 'bg-[#c8622a] w-8' : 'bg-[#4a4a4a]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 hover:bg-[#3a3a3a] rounded-full transition-colors text-[#c8622a]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
