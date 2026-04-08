import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(2, Math.min((x / rect.width) * 100, 98));
    setSliderPosition(percent);
    setHasInteracted(true);
  };

  const onMouseMove = (e: MouseEvent) => { if (isDragging) handleMove(e.clientX); };
  const onTouchMove = (e: TouchEvent) => { if (isDragging) handleMove(e.touches[0].clientX); };
  const onUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('touchend', onUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [isDragging]);

  // Hint animation on mount
  useEffect(() => {
    if (hasInteracted) return;
    const t1 = setTimeout(() => setSliderPosition(35), 1200);
    const t2 = setTimeout(() => setSliderPosition(65), 2000);
    const t3 = setTimeout(() => setSliderPosition(50), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [hasInteracted]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] overflow-hidden rounded-3xl select-none cursor-ew-resize shadow-2xl"
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover pointer-events-none" />
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-6 left-6 flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-white/60" />
          <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase">
            {beforeLabel}
          </span>
        </motion.div>
      </div>

      {/* After Image */}
      <div
        className="absolute inset-0 transition-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={afterImage} alt="After" className="w-full h-full object-cover pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-6 right-6 flex items-center gap-2"
        >
          <span className="bg-accent/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider uppercase">
            {afterLabel}
          </span>
          <div className="w-2 h-2 rounded-full bg-accent" />
        </motion.div>
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white/80 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ scale: isDragging ? 1.2 : 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 10L2 7l4-3M14 10l4-3-4-3M2 10h16" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Hint text */}
      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium"
        >
          ← drag to compare →
        </motion.div>
      )}
    </div>
  );
}
