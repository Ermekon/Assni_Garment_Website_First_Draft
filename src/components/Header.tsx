import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Topbar */}
      <div className="bg-dark-bg text-white py-2.5 text-sm">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="w-full md:w-1/2 overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="w-full"
            >
              <SwiperSlide>Delivery across Ethiopia and export · Addis Ababa, Ethiopia</SwiperSlide>
              <SwiperSlide>Quote within 24 hours · Sample within 48 hours</SwiperSlide>
              <SwiperSlide>1,200+ orders delivered · One team, end to end</SwiperSlide>
            </Swiper>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-300">
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-sm py-4' : 'py-6'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="max-w-[1410px] mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tighter text-heading">
            ASSNI<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-medium">
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link to="/how-we-work" className="hover:text-accent transition-colors">How We Work</Link>
            <Link to="/materials" className="hover:text-accent transition-colors">Materials</Link>
            <Link to="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://wa.me/251911149383?text=Hi%2C+I'm+interested+in+a+quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-whatsapp-hover text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              WhatsApp Us
            </a>
            <Link 
              to="/contact"
              className="bg-dark-bg hover:bg-black text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <a 
              href="https://wa.me/251911149383?text=Hi%2C+I'm+interested+in+a+quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              WhatsApp
            </a>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4">
            <Link to="/services" className="text-lg font-medium py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link to="/how-we-work" className="text-lg font-medium py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>How We Work</Link>
            <Link to="/materials" className="text-lg font-medium py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Materials & Printing</Link>
            <Link to="/case-studies" className="text-lg font-medium py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</Link>
            <Link to="/about" className="text-lg font-medium py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/faq" className="text-lg font-medium py-2 border-b border-border" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
            <Link to="/contact" className="bg-dark-bg text-white text-center py-3 rounded-full font-medium mt-4" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
          </div>
        )}
      </header>
    </>
  );
}
