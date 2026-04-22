export default function StarDishes() {
  const dishes = [
    {
      name: 'Chuletón de Ternera',
      description: 'Corte premium a la perfección, jugoso y tierno',
      image: '/manus-storage/pasted_file_H5YfVl_image_6e8d648f.png',
    },
    {
      name: 'Picaña de Angus',
      description: 'Jugosa, tierna, irresistible',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/picana-angus-aSmCgqDkawSiojNqzJzsqo.webp',
    },
    {
      name: 'Tarta de queso de la Rosa',
      description: 'El postre del que todo el mundo habla',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/tarta-queso-rosa-kwB5qFsaTyKVknaeCLXTxs.webp',
    },
  ];

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#f5f0e8] mb-4 text-center">
          Platos Estrella
        </h2>
        <p className="text-center text-[#d4a96a] mb-12 text-lg">
          Lo más destacado de nuestra cocina
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="card-dark overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair font-bold text-[#f5f0e8] text-xl mb-2">
                  {dish.name}
                </h3>
                <p className="text-[#d4a96a] italic">
                  "{dish.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
