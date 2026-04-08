import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Cursor glow
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const springX = useSpring(cursorX, { stiffness: 120, damping: 22 });
  const springY = useSpring(cursorY, { stiffness: 120, damping: 22 });

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(totalScroll / windowHeight);
      setShowBackToTop(totalScroll > 300);
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="has-whatsapp">
      {/* #17 Cursor glow — desktop only */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
            width: 380,
            height: 380,
            background: 'radial-gradient(circle, rgba(26,107,60,0.10) 0%, transparent 70%)',
          }}
        />
      )}

      {/* #20 Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[9998] origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* WhatsApp float */}
      <a
        href="https://wa.me/251911149383?text=Hi%2C+I'm+interested+in+a+quote"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={24} />
        <span className="font-medium">WhatsApp Us</span>
      </a>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        aria-label="Back to top"
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          <circle
            cx="22" cy="22" r="20"
            fill="none" stroke="white" strokeWidth="2"
            strokeDasharray="125.6"
            strokeDashoffset={125.6 - 125.6 * scrollProgress}
            className="transition-all duration-150 ease-out"
          />
        </svg>
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
