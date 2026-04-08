import { useEffect, useRef } from 'react';
import { inView, animate } from 'motion';

interface Props {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ to, prefix = '', suffix = '', duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    inView(ref.current, () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      animate(0, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = prefix + Math.round(value).toLocaleString() + suffix;
          }
        },
      });
    }, { margin: '-10%' });
  }, [to, prefix, suffix, duration]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
