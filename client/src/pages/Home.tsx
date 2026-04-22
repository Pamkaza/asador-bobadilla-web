import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/Menu';
import StarDishes from '@/components/StarDishes';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Reservations from '@/components/Reservations';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f0e8]">
      <Header />
      <Hero />
      <About />
      <MenuSection />
      <StarDishes />
      <Testimonials />
      <Gallery />
      <Reservations />
      <Location />
      <Footer />
    </div>
  );
}
