import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/hero-carne-josper-bwTLe4PgGgvZqtR3MznewW.webp',
    alt: 'Carne a la brasa en Josper',
    label: 'Carne a la brasa',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/picana-angus-aSmCgqDkawSiojNqzJzsqo.webp',
    alt: 'Picaña de Angus',
    label: 'Picaña de Angus',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/tarta-queso-rosa-kwB5qFsaTyKVknaeCLXTxs.webp',
    alt: 'Tarta de queso de la Rosa',
    label: 'Tarta de queso',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/interior-restaurante-DrGuRS4oigrk8Ey6d45qFq.webp',
    alt: 'Interior del restaurante',
    label: 'Local interior',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/hero-carne-josper-bwTLe4PgGgvZqtR3MznewW.webp',
    alt: 'Brasas del Josper',
    label: 'Brasas del Josper',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/interior-restaurante-DrGuRS4oigrk8Ey6d45qFq.webp',
    alt: 'Ambiente acogedor',
    label: 'Ambiente acogedor',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/picana-angus-aSmCgqDkawSiojNqzJzsqo.webp',
    alt: 'Carnes premium',
    label: 'Carnes premium',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/tarta-queso-rosa-kwB5qFsaTyKVknaeCLXTxs.webp',
    alt: 'Postres caseros',
    label: 'Postres caseros',
  },
  {
    src: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663414730862/goxDgi5J3viYChHrMd6rhu/hero-carne-josper-bwTLe4PgGgvZqtR3MznewW.webp',
    alt: 'Fuego y tradición',
    label: 'Fuego y tradición',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#f5f0e8] mb-4 text-center">
          Galería
        </h2>
        <p className="text-center text-[#d4a96a] mb-12 text-lg">
          Descubre la esencia de Asador Bobadilla
        </p>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="relative overflow-hidden rounded-sm cursor-pointer group h-48 md:h-64"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end justify-start p-4">
                <p className="text-[#f5f0e8] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto rounded-sm"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-[#c8622a] hover:bg-[#b8522a] text-[#f5f0e8] p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <p className="text-[#f5f0e8] mt-4 text-center font-semibold">
              {galleryImages[selectedImage].label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
