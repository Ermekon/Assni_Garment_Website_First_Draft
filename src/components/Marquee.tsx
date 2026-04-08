import { motion } from 'motion/react';

const items = [
  '1,200+ Orders Delivered',
  '48-Hour Physical Samples',
  'In-House Production',
  "Ethiopia's Trusted Garment Supplier",
  'Direct Communication — No Middlemen',
  'Zero Outsourcing',
  '14-Day Turnaround',
  'Sample Before You Commit',
  'Quality Guaranteed',
  'Design Through Delivery',
];

export default function Marquee() {
  return (
    <div className="bg-accent text-white py-2.5 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="flex whitespace-nowrap will-change-transform"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-xs font-bold tracking-widest uppercase inline-flex items-center shrink-0">
            {item}
            <span className="mx-6 text-white/40">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
