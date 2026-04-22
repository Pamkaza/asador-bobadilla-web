import { useState } from 'react';

const menuData: Record<string, Array<{ name: string; price: string; special?: boolean }>> = {
  Entrantes: [
    { name: 'Gambas de cristal con huevos de corral', price: 'Consultar' },
    { name: 'Lagartillos ibéricos', price: 'Consultar' },
    { name: 'Calamares fritos con ensalada', price: 'Consultar' },
    { name: 'Huevos rotos con patatas caseras', price: 'Consultar' },
    { name: 'Cecina', price: 'Consultar' },
    { name: 'Salmorejo casero', price: 'Consultar' },
    { name: 'Migas', price: 'Consultar' },
    { name: 'Tomate con aguacate y melva', price: 'Consultar' },
  ],
  'Carnes a la Brasa': [
    { name: 'Solomillo de vaca premium al carbón', price: 'Consultar' },
    { name: 'Picaña de Angus', price: 'Consultar' },
    { name: 'Entrecot', price: 'Consultar' },
    { name: 'Secreto ibérico', price: 'Consultar' },
    { name: 'Presa de Angus', price: 'Consultar' },
    { name: 'Paletilla de cordero al estilo Aranda de Duero', price: 'Consultar' },
    { name: 'Pata de cordero', price: 'Consultar' },
  ],
  Postres: [
    { name: 'Tarta de queso de la Rosa (3 quesos, al horno)', price: 'Consultar', special: true },
    { name: 'Bartolitos', price: 'Consultar' },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Entrantes');

  return (
    <section id="menu" className="py-20 bg-[#2d2d2d]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#f5f0e8] mb-4 text-center">
          Nuestra Carta
        </h2>
        <p className="text-center text-[#d4a96a] mb-12 text-lg">
          Selección de platos caseros y carnes premium
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-sm font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-[#c8622a] text-[#f5f0e8]'
                  : 'bg-[#1a1a1a] text-[#d4a96a] hover:bg-[#3a3a3a]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
            <div
              key={index}
              className="card-dark p-6 hover:border-[#c8622a] hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-playfair font-bold text-[#f5f0e8] text-lg mb-2">
                    {item.name}
                    {item.special && <span className="text-[#c8622a] ml-2">⭐</span>}
                  </h3>
                </div>
              </div>
              <p className="text-[#c8622a] font-semibold text-lg">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
