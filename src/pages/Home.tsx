import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import MotionWrapper from '../components/MotionWrapper';
import { Building2, Briefcase, Calendar, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What is your minimum order quantity?", a: "Our minimum order quantity is 50 units per design." },
    { q: "How long does production take?", a: "Standard production takes 14-21 days after sample approval." },
    { q: "Do you provide samples?", a: "Yes, we provide a physical sample within 48 hours of brief approval." },
    { q: "Can you help with design?", a: "Yes, our in-house design team can help refine your concepts." },
    { q: "What printing methods do you use?", a: "We offer screen printing, embroidery, sublimation, and heat transfer." },
    { q: "Do you deliver outside Addis Ababa?", a: "Yes, we deliver across Ethiopia and handle export orders." }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-dark-bg text-white">
        <div className="absolute inset-0 z-0">
          <MotionWrapper animation="zoom-out" hold className="w-full h-full">
            <img 
              src="https://picsum.photos/seed/garment/1920/1080" 
              alt="Garment production" 
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
          </MotionWrapper>
        </div>
        
        <div className="relative z-10 max-w-[1410px] mx-auto px-4 md:px-8 w-full">
          <div className="max-w-[900px]">
            <MotionWrapper animation="fade-up-lg" delay={100} hold>
              <p className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-300">
                ADDIS ABABA, ETHIOPIA
              </p>
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up-lg" delay={200} hold>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance leading-tight text-left w-[900px]">
                Your Brand on Every Team Member Without the Supplier Chaos
              </h1>
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up-lg" delay={300} hold>
              <p className="text-lg md:text-xl text-gray-300 mb-10 w-[850px] max-w-full leading-relaxed">
                Design, production, decoration, packaging, and delivery all handled
                in-house by one team. See your sample within 48 hours. Approve it 
                before we make the rest.
              </p>
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up-lg" delay={400} hold className="flex flex-wrap gap-4">
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
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-dark-bg text-white border-t border-white/10">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-x border-white/10">
            {[
              { stat: "1,200+", label: "Orders delivered across Ethiopia" },
              { stat: "48 hrs", label: "From brief to physical sample" },
              { stat: "1 team", label: "Design through delivery — no handoffs" },
              { stat: "24 hrs", label: "Quote turnaround after brief" }
            ].map((item, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 50} className="p-8 md:p-12 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{item.stat}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <div className="mb-16 max-w-2xl">
            <MotionWrapper animation="fade-up-lg">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Who We Work With</h2>
              <p className="text-lg text-gray-600">
                We support organizations across Ethiopia with reliable, high-quality custom apparel.
              </p>
            </MotionWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Building2, title: "NGOs", desc: "Reliable production for field teams and campaigns. We understand strict procurement requirements and deadlines." },
              { icon: Briefcase, title: "Businesses", desc: "Professional corporate wear that represents your brand accurately, from office staff to delivery teams." },
              { icon: Calendar, title: "Events", desc: "Bulk orders delivered on time for conferences, exhibitions, and promotional campaigns." },
              { icon: GraduationCap, title: "Schools", desc: "Durable, comfortable uniforms that stand up to daily wear and tear." }
            ].map((segment, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <div className="border border-border rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white">
                  <segment.icon className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{segment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{segment.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* What We Make */}
      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">What We Make</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { img: "https://picsum.photos/seed/tshirt/600/800", title: "T-Shirts & Polos" },
              { img: "https://picsum.photos/seed/totebag/600/800", title: "Tote Bags" },
              { img: "https://picsum.photos/seed/uniform/600/800", title: "Uniforms & Custom Orders" }
            ].map((product, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <Link to="/services" className="block group hover-zoom">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="w-full h-full object-cover product-image"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center group-hover:text-accent transition-colors">{product.title}</h3>
                </Link>
              </MotionWrapper>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/contact"
              className="inline-block bg-dark-bg hover:bg-black text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* See What We Deliver */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/delivery/1920/1080" 
              alt="Delivery" 
              className="w-full h-[600px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center">
              <MotionWrapper animation="fade-up-lg">
                <h2 className="text-4xl font-bold tracking-tighter mb-8">See What We Deliver</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-lg text-gray-600">Branded T-shirts with clean, consistent prints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-lg text-gray-600">Close-up embroidery and stitching quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-lg text-gray-600">Uniform sets prepared and packaged for delivery</span>
                  </li>
                </ul>
                <p className="text-lg font-medium">
                  Every order includes a sample for your approval before full production begins.
                </p>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Why Assni */}
      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Why Assni</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "From Brief to Delivery", desc: "We handle everything in-house. No third-party delays or miscommunications." },
              { title: "Sample Before You Commit", desc: "See and feel a physical sample within 48 hours before approving full production." },
              { title: "Your Logo Done Right", desc: "We advise on the best printing method so your brand looks crisp and lasts long." },
              { title: "Direct Communication", desc: "You talk directly to the person managing your order, not a generic sales inbox." }
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

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { quote: "Assni delivered 500 branded t-shirts for our campaign on time and the quality was exactly what we approved in the sample.", author: "Procurement Manager", company: "[NGO Name]" },
              { quote: "Finally, a supplier that communicates clearly. The uniforms look great and the team loves wearing them.", author: "Operations Director", company: "[Company Name]" }
            ].map((testimonial, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <div className="bg-light-bg p-10 rounded-3xl h-full flex flex-col">
                  <div className="text-6xl text-accent font-serif leading-none mb-6">"</div>
                  <p className="text-xl md:text-2xl font-medium mb-8 flex-grow leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (Preview) */}
      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">How It Works</h2>
          </MotionWrapper>

          <div className="flex flex-col md:flex-row justify-between gap-8 relative mb-16">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-border z-0"></div>
            {[
              { num: "01", title: "Send Brief", desc: "Tell us what you need and get a quote in 24h." },
              { num: "02", title: "Approve Sample", desc: "Review a physical sample within 48h." },
              { num: "03", title: "Receive Order", desc: "We produce and deliver on time." }
            ].map((step, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100} className="relative z-10 flex-1 bg-light-bg md:pr-8">
                <div className="text-5xl font-bold text-accent mb-6">{step.num}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper animation="fade-up-lg">
            <Link to="/how-we-work" className="text-accent font-bold hover:underline flex items-center gap-2">
              See Full Process <span className="text-xl">→</span>
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Frequently Asked Questions</h2>
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

      {/* CTA Band */}
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-balance">
              Ready to see your brand on apparel that actually looks right?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Send us a WhatsApp. Tell us what you need. We'll send you a quote within 24 hours and a sample within 48.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
    </main>
  );
}
