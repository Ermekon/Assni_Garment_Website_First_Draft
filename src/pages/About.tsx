import MotionWrapper from '../components/MotionWrapper';
import { Linkedin, MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 md:py-40 bg-dark-bg text-white text-center">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" hold>
            <p className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-300">
              ABOUT ASSNI
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance leading-tight">
              You're not dealing with a sales team. You're dealing with the person responsible for your order.
            </h1>
          </MotionWrapper>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <MotionWrapper animation="fade-up-lg">
                <h2 className="text-4xl font-bold tracking-tighter mb-6">Who We Are</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Assni Garment was founded to solve a specific problem in the Ethiopian apparel market: the disconnect between what is promised and what is delivered.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Too often, organizations order custom apparel only to face delays, poor print quality, or garments that don't match the approved sample. We built a facility and a process to eliminate that chaos. By keeping design, production, and decoration in-house, we control the outcome.
                </p>
              </MotionWrapper>
            </div>
            <div className="md:w-1/2 w-full">
              <MotionWrapper animation="zoom-out-sm">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden relative bg-gray-200">
                  <img src="https://picsum.photos/seed/facility/800/600" alt="Assni Facility" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-bold">(Add facility wide shot)</span>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 md:py-32 bg-light-bg text-center">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 relative bg-gray-200">
              <img src="https://picsum.photos/seed/founder/400/400" alt="Hiwot Assefa" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="bg-white/90 px-2 py-1 rounded-full text-xs font-bold">(Add portrait)</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2">Hiwot Assefa</h2>
            <p className="text-accent font-bold mb-8 uppercase tracking-wider text-sm">Founder & Operations Director</p>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 italic">
              "I oversee every order that comes through our doors. When you message us, you're talking to the person who will actually make sure your garments are printed correctly and delivered on time."
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="flex items-center gap-2 bg-white border border-border px-6 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium">
                <Linkedin size={20} className="text-[#0A66C2]" /> LinkedIn
              </a>
              <a href="https://wa.me/251911149383" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-6 py-3 rounded-full transition-colors font-medium">
                <MessageCircle size={20} /> Direct WhatsApp
              </a>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* How We Work Differently */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">What Makes Us Different</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "No Handoffs", desc: "We don't send your garments to a third-party printer. We do it here." },
              { title: "Sample First", desc: "We never ask you to approve full production based on a digital mockup alone." },
              { title: "Honest Deadlines", desc: "If we can't hit your deadline, we will tell you before taking your money." },
              { title: "Quality Control", desc: "Every garment is inspected before it goes into the box." }
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

      {/* Values */}
      <section className="py-20 bg-dark-bg text-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16">
            <h2 className="text-4xl font-bold tracking-tighter">Our Values in Practice</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Reliability", desc: "We answer messages promptly and deliver when we say we will." },
              { title: "Transparency", desc: "We explain the pros and cons of different fabrics and prints." },
              { title: "Craftsmanship", desc: "We care about straight seams and crisp, uncracked logos." },
              { title: "Partnership", desc: "We want to be the supplier you trust for your next ten orders." }
            ].map((value, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 h-full">
                  <h3 className="text-xl font-bold mb-4 text-accent">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ethiopia */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tighter">Why Ethiopia</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Skilled Workforce", desc: "Ethiopia has a rich history in textiles and a highly capable garment manufacturing workforce." },
              { title: "Competitive Pricing", desc: "Local production allows us to offer premium quality at highly competitive rates compared to imports." },
              { title: "Local Advantage", desc: "For Ethiopian organizations, working with us means no import delays, no customs headaches, and fast delivery." }
            ].map((item, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-4 bg-light-bg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[
            { img: "https://picsum.photos/seed/floor/600/600", label: "Production Floor" },
            { img: "https://picsum.photos/seed/decor/600/600", label: "Decoration Close-up" },
            { img: "https://picsum.photos/seed/goods/600/600", label: "Finished Goods" },
            { img: "https://picsum.photos/seed/pack/600/600", label: "Packaging" }
          ].map((item, i) => (
            <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative group">
                <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-sm md:text-base">
                  {item.label}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-balance">
              If you want to work with a supplier who answers directly — this is it.
            </h2>
            <a 
              href="https://wa.me/251911149383?text=Hi+Hiwot%2C+I'd+like+to+discuss+an+order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              Send Hiwot a WhatsApp
            </a>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
