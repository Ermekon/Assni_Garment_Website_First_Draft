import { motion, useMotionValue, useSpring } from 'motion/react';
import { ReactNode, useRef } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  as?: 'a' | 'button';
}

export default function MagneticButton({ children, className = '', href, target, rel, onClick, as: Tag = 'a' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 25 });
  const springY = useSpring(y, { stiffness: 350, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {href ? (
        <a href={href} target={target} rel={rel} className={className}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={className}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
