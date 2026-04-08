import { Link } from 'react-router-dom';
import MotionWrapper from '../components/MotionWrapper';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function MaterialsPrinting() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Can I mix and match printing methods?", a: "Yes, for example, you can have an embroidered logo on the front and a screen-printed design on the back." },
    { q: "Do you offer eco-friendly fabrics?", a: "We can source organic cotton and recycled polyester blends upon request." },
    { q: "What is the maximum print size?", a: "Standard screen printing is up to A3 size. For larger prints, we recommend sublimation (on polyester)." },
    { q: "Will the print fade after washing?", a: "We use high-quality inks and curing processes. If care instructions are followed, the print will last the lifetime of the garment." }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" hold>
            <p className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-300">
              MATERIALS & PRINTING
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance !text-white">
              The wrong printing method costs you. Here's how to choose the right one.
            </h1>
          </MotionWrapper>
        </div>
      </section>

      {/* Print Methods */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">Printing Methods</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Screen Printing", desc: "The industry standard for vibrant, long-lasting prints on cotton and blends.", props: ["Highly durable", "Vibrant colors", "Cost-effective at scale"], bestFor: "T-shirts, hoodies, large batch orders", moq: "from 50 units" },
              { title: "Embroidery", desc: "Premium thread stitching for a professional, textured finish.", props: ["Extremely durable", "Professional look", "Adds texture"], bestFor: "Polos, caps, corporate uniforms, jackets", moq: "from 50 units" },
              { title: "Sublimation", desc: "Ink is fused directly into the fabric fibers. Only works on polyester.", props: ["Never cracks or fades", "Breathable", "Full-color photographic prints"], bestFor: "Sports jerseys, activewear, all-over prints", moq: "from 50 units" },
              { title: "Heat Transfer", desc: "Design is printed onto special vinyl and heat-pressed onto the garment.", props: ["Great for complex, multi-color designs", "Works on most fabrics", "Sharp details"], bestFor: "Small batches, complex logos, numbers/names", moq: "from 50 units" }
            ].map((method, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <div className="bg-light-bg p-8 md:p-10 rounded-3xl h-full border border-border">
                  <h3 className="text-3xl font-bold mb-4">{method.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{method.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {method.props.map((prop, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span>{prop}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white p-4 rounded-xl border border-border mb-4">
                    <span className="font-bold text-accent">→ Best for:</span> <span className="font-medium">{method.bestFor}</span>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">MOQ: {method.moq}</div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrics */}
      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">Fabrics</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "100% Cotton", desc: "Soft, breathable, and comfortable. The classic choice for everyday wear.", props: ["Highly breathable", "Soft feel", "Takes screen printing perfectly"], bestFor: "Premium t-shirts, casual wear" },
              { title: "Polyester", desc: "Durable, moisture-wicking, and resistant to shrinking and wrinkling.", props: ["Moisture-wicking", "Durable", "Required for sublimation"], bestFor: "Activewear, sports jerseys, high-wear uniforms" },
              { title: "Poly-Cotton Blends", desc: "Combines the softness of cotton with the durability of polyester.", props: ["Less wrinkling than pure cotton", "More durable", "Holds shape well"], bestFor: "Corporate uniforms, everyday workwear" },
              { title: "Custom Sourcing", desc: "Need something specific? We can source specialized fabrics.", props: ["Canvas for tote bags", "Heavyweight fleece for hoodies", "High-visibility materials"], bestFor: "Specialized requirements" }
            ].map((fabric, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <div className="bg-white p-8 md:p-10 rounded-3xl h-full border border-border">
                  <h3 className="text-3xl font-bold mb-4">{fabric.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{fabric.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {fabric.props.map((prop, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span>{prop}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-light-bg p-4 rounded-xl border border-border">
                    <span className="font-bold text-accent">→ Best for:</span> <span className="font-medium">{fabric.bestFor}</span>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Quick Comparison</h2>
          </MotionWrapper>
          
          <MotionWrapper animation="fade-up-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-dark-bg">
                    <th className="py-4 px-4 font-bold">Method</th>
                    <th className="py-4 px-4 font-bold">Best For</th>
                    <th className="py-4 px-4 font-bold">Look</th>
                    <th className="py-4 px-4 font-bold">Durability</th>
                    <th className="py-4 px-4 font-bold">Cost (at scale)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-light-bg transition-colors">
                    <td className="py-4 px-4 font-bold">Screen Print</td>
                    <td className="py-4 px-4">Cotton/Blends</td>
                    <td className="py-4 px-4">Vibrant, flat</td>
                    <td className="py-4 px-4">High</td>
                    <td className="py-4 px-4 text-accent font-bold">Low</td>
                  </tr>
                  <tr className="hover:bg-light-bg transition-colors">
                    <td className="py-4 px-4 font-bold">Embroidery</td>
                    <td className="py-4 px-4">Polos/Jackets</td>
                    <td className="py-4 px-4">Textured, premium</td>
                    <td className="py-4 px-4">Very High</td>
                    <td className="py-4 px-4">Medium</td>
                  </tr>
                  <tr className="hover:bg-light-bg transition-colors">
                    <td className="py-4 px-4 font-bold">Sublimation</td>
                    <td className="py-4 px-4">Polyester only</td>
                    <td className="py-4 px-4">Photographic, seamless</td>
                    <td className="py-4 px-4">Very High</td>
                    <td className="py-4 px-4">Medium</td>
                  </tr>
                  <tr className="hover:bg-light-bg transition-colors">
                    <td className="py-4 px-4 font-bold">Heat Transfer</td>
                    <td className="py-4 px-4">Complex logos</td>
                    <td className="py-4 px-4">Sharp, slightly raised</td>
                    <td className="py-4 px-4">Medium</td>
                    <td className="py-4 px-4">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* We'll Guide You CTA */}
      <section className="py-20 bg-light-bg text-center">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg">
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Still not sure? We'll guide you.</h2>
            <p className="text-lg text-gray-600 mb-8">
              You don't need to be an expert. Tell us what you want to achieve, and we'll recommend the best combination of fabric and printing method.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Materials FAQ</h2>
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-balance !text-white">
              Tell us your design, quantity, and how the garment will be used.
            </h2>
            <a 
              href="https://wa.me/251911149383?text=Hi%2C+I+need+advice+on+materials+and+printing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              Get Expert Advice
            </a>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
