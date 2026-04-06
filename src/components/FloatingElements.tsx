import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(Number(scroll));
      
      if (totalScroll > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="has-whatsapp">
      <a 
        href="https://wa.me/251911149383?text=Hi%2C+I'm+interested+in+a+quote"
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <MessageCircle size={24} />
        <span className="font-medium">WhatsApp Us</span>
      </a>

      <button 
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
          <circle 
            cx="22" cy="22" r="20" 
            fill="none" 
            stroke="rgba(255,255,255,0.2)" 
            strokeWidth="2" 
          />
          <circle 
            cx="22" cy="22" r="20" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeDasharray="125.6" 
            strokeDashoffset={125.6 - (125.6 * scrollProgress)}
            className="transition-all duration-150 ease-out"
          />
        </svg>
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
