import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
  id?: string;
}

interface Props {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <motion.div
          key={faq.id ?? i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="border border-border rounded-2xl overflow-hidden bg-white"
        >
          <button
            className="w-full px-6 py-5 text-left flex justify-between items-center font-bold text-[15px] hover:bg-light-bg transition-colors gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{faq.q}</span>
            <motion.div
              animate={{ rotate: open === i ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0"
            >
              <ChevronDown className={open === i ? 'text-accent' : 'text-gray-400'} size={20} />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 py-5 bg-light-bg border-t border-border">
                  <p className="text-gray-600 text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
