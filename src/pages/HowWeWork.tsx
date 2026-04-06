import { Link } from 'react-router-dom';
import MotionWrapper from '../components/MotionWrapper';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function HowWeWork() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How long does the whole process take?", a: "Typically 14-21 days from sample approval to final delivery, depending on order size." },
    { q: "What if I don't like the sample?", a: "We revise it until you are satisfied. Full production only begins after your final approval." },
    { q: "Do I need to provide the design?", a: "You can provide your own design, or our in-house team can help create one for you." },
    { q: "What are your payment terms?", a: "We require a 50% deposit to begin production, with the balance due upon delivery." }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" hold>
            <p className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-300">
              HOW WE WORK
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance">
              You'll know exactly what's happening at every stage — because we tell you.
            </h1>
          </MotionWrapper>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <MotionWrapper animation="fade-up-lg">
            <h2 className="text-3xl font-bold mb-4">No Guesswork. No Surprises.</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We've built our process to eliminate the anxiety of custom apparel orders. Here is exactly what happens when you work with us.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="space-y-16">
            {[
              { num: "01", title: "Send Your Brief", desc: "Tell us what you need: product type, quantity, deadline, and any design files. We'll review it and ask any clarifying questions.", outcome: "A clear, itemized quote within 24 hours." },
              { num: "02", title: "Approve the Sample", desc: "Once you accept the quote, we produce a single physical sample of your order. You can touch the fabric, check the fit, and inspect the print quality.", outcome: "A physical sample in your hands within 48 hours." },
              { num: "03", title: "Full Production", desc: "After you approve the sample, we begin full production. Our in-house team handles everything, ensuring consistency across the entire batch.", outcome: "Regular updates on production status." },
              { num: "04", title: "Quality Control & Packaging", desc: "Every item is inspected for flaws, loose threads, and print consistency. We then fold and package the garments according to your requirements.", outcome: "A flawless batch ready for your team." },
              { num: "05", title: "Delivery", desc: "We deliver the final order to your specified location in Addis Ababa, or coordinate shipping for regional and export orders.", outcome: "Your order delivered on time, as promised." }
            ].map((step, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="text-6xl md:text-8xl font-bold text-accent opacity-20 leading-none">{step.num}</div>
                  </div>
                  <div className="md:w-3/4 pt-4">
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.desc}</p>
                    <div className="bg-white p-4 rounded-xl border border-border inline-block">
                      <span className="font-bold text-accent">→ You get:</span> <span className="font-medium">{step.outcome}</span>
                    </div>
                  </div>
                </div>
                {i < 4 && <div className="h-px w-full bg-border mt-16"></div>}
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">Standard Timeline</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionWrapper animation="fade-up-lg" delay={100}>
              <div className="bg-dark-bg text-white p-8 rounded-3xl h-full">
                <div className="text-accent font-bold mb-4">Day 1–2</div>
                <h3 className="text-2xl font-bold mb-4">Brief & Quote</h3>
                <p className="text-gray-400">We finalize the details and provide a comprehensive quote.</p>
              </div>
            </MotionWrapper>
            <MotionWrapper animation="fade-up-lg" delay={200}>
              <div className="bg-accent text-white p-8 rounded-3xl h-full">
                <div className="text-white/70 font-bold mb-4">Day 3–5</div>
                <h3 className="text-2xl font-bold mb-4">Sampling</h3>
                <p className="text-white/90">We produce and deliver the physical sample for your approval.</p>
              </div>
            </MotionWrapper>
            <MotionWrapper animation="fade-up-lg" delay={300}>
              <div className="bg-light-bg p-8 rounded-3xl h-full border border-border">
                <div className="text-accent font-bold mb-4">Day 6–21</div>
                <h3 className="text-2xl font-bold mb-4">Production & Delivery</h3>
                <p className="text-gray-600">Full production, quality control, and final delivery.</p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Why This Process Is Reliable */}
      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Why This Process Is Reliable</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Single Point of Contact", desc: "You won't be bounced between departments. One manager handles your order." },
              { title: "In-House Control", desc: "Because we don't outsource, we control the schedule and the quality." },
              { title: "Mandatory Sampling", desc: "We never skip the sample phase. It's the only way to guarantee satisfaction." },
              { title: "Proactive Updates", desc: "We tell you when milestones are hit, so you never have to chase us." }
            ].map((feature, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <div className="border-t-2 border-accent pt-6">
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Process FAQ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Process FAQ</h2>
          </MotionWrapper>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 50}>
                <div className="border border-border rounded-2xl overflow-hidden">
                  <button 
                    className="w-full px-6 py-5 text-left flex justify-between items-center font-bold text-lg hover:bg-light-bg transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    {openFaq === i ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-gray-400" />}
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === i ? 'max-h-40 py-5 bg-light-bg border-t border-border' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-balance">
              Step one takes 30 seconds.
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Send us a WhatsApp with your product, quantity, and deadline. We'll take it from there.
            </p>
            <a 
              href="https://wa.me/251911149383?text=Hi%2C+I+have+a+brief+for+an+order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              Send Your Brief
            </a>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
