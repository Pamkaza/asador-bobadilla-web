import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1a] border-b border-[#3a3a3a]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold font-playfair text-[#c8622a]">•</div>
          <h1 className="text-xl font-bold font-playfair text-[#f5f0e8]">Asador la Bobadilla</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('hero')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors">Inicio</button>
          <button onClick={() => scrollToSection('menu')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors">Carta</button>
          <button onClick={() => scrollToSection('reservations')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors">Reservas</button>
          <button onClick={() => scrollToSection('gallery')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors">Galería</button>
          <button onClick={() => scrollToSection('location')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors">Ubicación</button>
          <button onClick={() => scrollToSection('footer')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors">Contacto</button>
        </nav>

        {/* CTA Button Desktop */}
        <button
          onClick={() => scrollToSection('reservations')}
          className="hidden md:block btn-cta"
        >
          Reservar Mesa
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#f5f0e8]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#2d2d2d] border-t border-[#3a3a3a] py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('hero')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors text-left">Inicio</button>
            <button onClick={() => scrollToSection('menu')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors text-left">Carta</button>
            <button onClick={() => scrollToSection('reservations')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors text-left">Reservas</button>
            <button onClick={() => scrollToSection('gallery')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors text-left">Galería</button>
            <button onClick={() => scrollToSection('location')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors text-left">Ubicación</button>
            <button onClick={() => scrollToSection('footer')} className="text-[#f5f0e8] hover:text-[#c8622a] transition-colors text-left">Contacto</button>
            <button
              onClick={() => scrollToSection('reservations')}
              className="btn-cta w-full"
            >
              Reservar Mesa
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
