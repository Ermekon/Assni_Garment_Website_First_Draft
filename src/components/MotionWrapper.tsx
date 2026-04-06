import React, { useEffect, useRef, ReactNode } from 'react';
import { animate, inView } from 'motion';

interface MotionWrapperProps {
  children: ReactNode;
  animation?: 'fade-up-lg' | 'fade-up' | 'fade-up-sm' | 'zoom-out' | 'zoom-out-sm';
  delay?: number;
  className?: string;
  hold?: boolean;
}

const motionVariants = {
  'fade-up-lg': { opacity: [0, 1], y: [40, 0] },
  'fade-up':    { opacity: [0, 1], y: [20, 0] },
  'fade-up-sm': { opacity: [0, 1], y: [10, 0] },
  'zoom-out':   { scale: [1.2, 1], opacity: [0, 1] },
  'zoom-out-sm':{ scale: [1.08, 1], opacity: [0, 1] },
};

const MotionWrapper: React.FC<MotionWrapperProps> = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  className = '',
  hold = false
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (hold) {
      // Fire on mount
      animate(ref.current, motionVariants[animation], { delay: delay / 1000, duration: 0.6 });
    } else {
      // Fire on scroll
      inView(ref.current, (element) => {
        animate(element, motionVariants[animation], { delay: delay / 1000, duration: 0.6 });
      }, { margin: "-10%" });
    }
  }, [animation, delay, hold]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default MotionWrapper;
