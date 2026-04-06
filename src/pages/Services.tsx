import { Link } from 'react-router-dom';
import MotionWrapper from '../components/MotionWrapper';
import { Shirt, Briefcase, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" hold>
            <p className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-300">
              OUR SERVICES
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance">
              Everything you need to outfit your team.
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a 
                href="https://wa.me/251911149383?text=Hi%2C+I'm+interested+in+a+quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
              >
                WhatsApp Us Now
              </a>
              <Link 
                to="/contact"
                className="bg-transparent border border-white hover:bg-white hover:text-dark-bg text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
              >
                Get a Quote
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Problem Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <MotionWrapper animation="fade-up-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The problem with most suppliers:</h2>
            <ul className="space-y-4 mb-10 text-left inline-block">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✕</span>
                <span className="text-lg text-gray-600">They outsource printing, leading to delays and errors.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✕</span>
                <span className="text-lg text-gray-600">They don't provide physical samples before full production.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">✕</span>
                <span className="text-lg text-gray-600">You have to manage multiple vendors for one order.</span>
              </li>
            </ul>
            <p className="text-xl font-bold text-accent">
              We do it all in-house. One team, from design to delivery.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shirt, title: "T-Shirts & Polos", desc: "High-quality cotton and blended fabrics, perfect for events, staff uniforms, and promotional giveaways." },
              { icon: Briefcase, title: "Tote Bags", desc: "Durable canvas and cotton tote bags with crisp, long-lasting prints for conferences and retail." },
              { icon: Users, title: "Corporate Uniforms", desc: "Professional attire including button-down shirts, trousers, and jackets tailored for your team." },
              { icon: ShieldCheck, title: "Safety Wear", desc: "High-visibility vests, coveralls, and durable workwear for construction and industrial teams." },
              { icon: CheckCircle2, title: "Custom Embroidery", desc: "Premium logo embroidery for a professional, long-lasting finish on polos, caps, and jackets." },
              { icon: CheckCircle2, title: "Screen Printing", desc: "Vibrant, durable prints ideal for large batch orders of t-shirts and promotional items." }
            ].map((service, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <div className="bg-white p-8 rounded-2xl h-full border border-border hover:shadow-lg transition-shadow">
                  <service.icon className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Why This Works</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "In-House Production", desc: "We control the quality and timeline because we don't outsource." },
              { title: "Physical Samples", desc: "You approve a real sample before we produce the rest of your order." },
              { title: "Expert Guidance", desc: "We recommend the right fabrics and printing methods for your specific needs." },
              { title: "Dedicated Support", desc: "One point of contact from your initial quote to final delivery." }
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

      {/* Visual Proof */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden relative">
              <img src="https://picsum.photos/seed/production/800/800" alt="Production" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-bold">(Add real images)</span>
              </div>
            </div>
            <div className="aspect-square bg-gray-200 rounded-3xl overflow-hidden relative">
              <img src="https://picsum.photos/seed/printing/800/800" alt="Printing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="bg-white/90 px-4 py-2 rounded-full text-sm font-bold">(Add real images)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We'll Guide You CTA */}
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-balance">
              Not sure what you need? We'll guide you.
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Tell us your budget, timeline, and how the garments will be used. We'll recommend the best options.
            </p>
            <a 
              href="https://wa.me/251911149383?text=Hi%2C+I+need+some+guidance+on+an+order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              Chat with an Expert
            </a>
          </MotionWrapper>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8 text-center">
          <MotionWrapper animation="fade-up-lg" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From your first message to final delivery, here is how we work.</p>
          </MotionWrapper>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["1. Brief", "2. Quote", "3. Sample", "4. Production", "5. Delivery"].map((step, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <div className="bg-light-bg px-6 py-3 rounded-full font-bold text-lg border border-border">
                  {step}
                </div>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper animation="fade-up-lg">
            <Link to="/how-we-work" className="text-accent font-bold hover:underline flex items-center justify-center gap-2">
              See Full Details <span className="text-xl">→</span>
            </Link>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
