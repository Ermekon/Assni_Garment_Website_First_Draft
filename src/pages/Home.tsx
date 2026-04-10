import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import MotionWrapper from '../components/MotionWrapper';
import AnimatedCounter from '../components/AnimatedCounter';
import { StaggerContainer, StaggerItem } from '../components/StaggerContainer';
import MagneticButton from '../components/MagneticButton';
import FAQAccordion from '../components/FAQAccordion';
import { motion, useScroll, useTransform } from 'motion/react';
import { Building2, Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const heroImgY = useTransform(scrollY, [0, 600], [0, 160]);

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden bg-dark-bg text-white">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            animate={{
              background: [
                'radial-gradient(ellipse at 20% 50%, rgba(26,107,60,0.35) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(26,107,60,0.15) 0%, transparent 50%)',
                'radial-gradient(ellipse at 60% 80%, rgba(26,107,60,0.30) 0%, transparent 60%), radial-gradient(ellipse at 30% 10%, rgba(26,107,60,0.20) 0%, transparent 50%)',
                'radial-gradient(ellipse at 20% 50%, rgba(26,107,60,0.35) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(26,107,60,0.15) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 z-10"
          />
          <motion.img
            style={{ y: heroImgY, scale: 1.1 }}
            src="/images/hero/hero.jpg"
            alt="Garment production"
            className="w-full h-full object-cover opacity-35"
          />
        </div>
        
        {/* Floating Badges */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[8%] z-10 hidden lg:block"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-lg">
            ⚡ 48hr Physical Sample
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute bottom-[28%] right-[12%] z-10 hidden lg:block"
        >
          <div className="bg-accent/90 backdrop-blur-md border border-white/10 text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-lg">
            ✓ 100% In-House Production
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-[40%] right-[5%] z-10 hidden xl:block"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-lg">
            📦 1,200+ Orders Delivered
          </div>
        </motion.div>

        <div className="relative z-10 max-w-[1410px] mx-auto px-4 md:px-8 w-full">
          <div className="max-w-[900px]">
            <MotionWrapper animation="fade-up-lg" delay={100} hold>
              <p className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-300">
                ADDIS ABABA, ETHIOPIA
              </p>
            </MotionWrapper>
            
            <MotionWrapper animation="fade-up-lg" delay={200} hold>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance leading-tight text-left w-[900px] !text-white">
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
              <MagneticButton
                href="https://wa.me/251911149383?text=Hi%2C+I'm+interested+in+a+quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
              >
                WhatsApp Us Now
              </MagneticButton>
              <MagneticButton
                href="/contact"
                className="bg-transparent border border-white hover:bg-white hover:text-dark-bg text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
              >
                Get a Quote
              </MagneticButton>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="bg-dark-bg -mt-1">
        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" style={{height:'60px'}}>
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="#111111" />
        </svg>
      </div>

      {/* Stats Band with progress bars */}
      <section className="bg-dark-bg text-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 border-x border-white/10">
            {[
              { to: 1200, suffix: '+', label: "Orders delivered", bar: 92 },
              { to: 48,   suffix: ' hrs', label: "Brief to sample", bar: 75 },
              { to: 1,    suffix: ' team', label: "End-to-end, no handoffs", bar: 100 },
              { to: 24,   suffix: ' hrs', label: "Quote turnaround", bar: 60 },
            ].map((item, i) => (
              <StaggerItem key={i} className="p-8 md:p-12 text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter to={item.to} suffix={item.suffix} />
                </div>
                <div className="text-xs text-gray-400 mb-4">{item.label}</div>
                {/* Progress bar */}
                <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.bar}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Building2, title: "NGOs", desc: "Reliable production for field teams and campaigns. We understand strict procurement requirements and deadlines." },
              { icon: Briefcase, title: "Businesses", desc: "Professional corporate wear that represents your brand accurately, from office staff to delivery teams." },
              { icon: Calendar, title: "Events", desc: "Bulk orders delivered on time for conferences, exhibitions, and promotional campaigns." },
              { icon: GraduationCap, title: "Schools", desc: "Durable, comfortable uniforms that stand up to daily wear and tear." }
            ].map((segment, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                  transition={{ duration: 0.3 }}
                  className="border border-border rounded-2xl p-8 bg-white cursor-default"
                >
                  <segment.icon className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{segment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{segment.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What We Make */}
      <section className="py-20 md:py-32 bg-light-bg overflow-hidden">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">What We Make</h2>
          </MotionWrapper>
        </div>

        <div className="max-w-[1410px] mx-auto px-4 md:px-8 overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -900 }}
            dragElastic={0.1}
            className="flex gap-12 pb-10"
            style={{ width: 'max-content' }}
          >
            {[
              { img: "/images/products/tshirts-product-card.jpg", title: "T-Shirts & Polos", desc: "Cotton & blended fabrics. Screen print or embroidery.", tags: ["Screen Print", "Embroidery"] },
              { img: "/images/products/tote-bags-product-card.jpg", title: "Tote Bags", desc: "Durable canvas with crisp, long-lasting prints.", tags: ["Screen Print", "Sublimation"] },
              { img: "/images/products/uniforms-product-card.jpg", title: "Uniforms & Custom Orders", desc: "Professional sets tailored for your team identity.", tags: ["Embroidery", "Heat Transfer"] },
            ].map((product, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-[80vw] sm:w-[360px] md:w-[420px] lg:w-[460px] shrink-0 group"
              >
                <Link to="/services" className="block" draggable={false}>
                  {/* Image container */}
                  <div className="h-[420px] sm:h-[480px] md:h-[520px] w-full overflow-hidden rounded-3xl mb-6 relative">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      draggable={false}
                    />
                    {/* Always-visible gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* MOQ badge */}
                    <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-white tracking-wide border border-white/20">
                      50+ units MOQ
                    </div>

                    {/* Hover overlay — slides up */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                      <p className="text-white/90 text-sm leading-relaxed mb-4">{product.desc}</p>
                      <span className="inline-flex items-center gap-2 text-white font-bold text-sm">
                        View Details <span className="text-base">→</span>
                      </span>
                    </div>

                    {/* Title inside image at bottom */}
                    <div className="absolute bottom-5 left-5 right-5 group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="!text-white font-bold text-xl leading-tight">{product.title}</h3>
                    </div>
                  </div>

                  {/* Tags below image */}
                  <div className="flex gap-2 flex-wrap px-1">
                    {product.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
            {/* End padding hint */}
            <div className="w-4 shrink-0" />
          </motion.div>
        </div>

        <div className="max-w-[1410px] mx-auto px-4 md:px-8 mt-8 text-center">
          <MagneticButton
            href="/contact"
            className="inline-block bg-dark-bg hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
          >
            Get a Quote
          </MagneticButton>
        </div>
      </section>

      {/* See What We Deliver */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          {/* Mobile: stacked layout */}
          <div className="flex flex-col md:hidden gap-0 rounded-3xl overflow-hidden border border-border">
              <img
                src="/images/hero/cta-bg.jpg"
                alt="Delivery"
                className="w-full h-[260px] object-cover"
                loading="lazy"
              />
            <div className="bg-white p-8">
              <MotionWrapper animation="fade-up-lg">
                <h2 className="text-3xl font-bold tracking-tighter mb-6">See What We Deliver</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-base text-gray-600">Branded T-shirts with clean, consistent prints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-base text-gray-600">Close-up embroidery and stitching quality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-base text-gray-600">Uniform sets prepared and packaged for delivery</span>
                  </li>
                </ul>
                <p className="text-base font-medium">
                  Every order includes a sample for your approval before full production begins.
                </p>
              </MotionWrapper>
            </div>
          </div>

          {/* Desktop: side-by-side layout */}
          <div className="hidden md:block relative rounded-3xl overflow-hidden">
              <img
                src="/images/hero/cta-bg.jpg"
                alt="Delivery"
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-y-0 left-0 w-1/2 bg-white p-16 flex flex-col justify-center">
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

      {/* Why Assni — Bento Grid */}
      <section className="py-20 md:py-32 bg-dark-bg text-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter !text-white">Why Assni</h2>
          </MotionWrapper>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Large card */}
            <StaggerItem className="md:col-span-6 lg:col-span-5">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-accent rounded-3xl p-10 h-full min-h-[260px] flex flex-col justify-between"
              >
                <div className="text-5xl font-bold text-white/20 mb-4">01</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 !text-white">From Brief to Delivery</h3>
                  <p className="text-white/80 leading-relaxed">We handle everything in-house. No third-party delays or miscommunications.</p>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Tall card */}
            <StaggerItem className="md:col-span-6 lg:col-span-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 h-full min-h-[260px] flex flex-col justify-between"
              >
                <div className="text-5xl font-bold text-white/10 mb-4">02</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 !text-white">Sample Before You Commit</h3>
                  <p className="text-white/80 leading-relaxed">See and feel a physical sample within 48 hours before approving full production.</p>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Stat card */}
            <StaggerItem className="md:col-span-12 lg:col-span-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 h-full min-h-[260px] flex flex-col justify-center items-center text-center"
              >
                <div className="text-6xl font-bold !text-accent mb-2">48h</div>
                <p className="text-white text-sm font-medium uppercase tracking-widest">Physical Sample</p>
              </motion.div>
            </StaggerItem>

            {/* Bottom two cards */}
            <StaggerItem className="md:col-span-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 h-full min-h-[200px] flex flex-col justify-between"
              >
                <div className="text-5xl font-bold text-white/10 mb-4">03</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 !text-white">Your Logo Done Right</h3>
                  <p className="text-white/80 leading-relaxed">We advise on the best printing method so your brand looks crisp and lasts long.</p>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem className="md:col-span-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 h-full min-h-[200px] flex flex-col justify-between"
              >
                <div className="text-5xl font-bold text-white/10 mb-4">04</div>
                <div>
                  <h3 className="text-xl font-bold mb-3 !text-white">Direct Communication</h3>
                  <p className="text-white/80 leading-relaxed">You talk directly to the person managing your order, not a generic sales inbox.</p>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials — Glassmorphism */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/90 to-dark-bg z-0" />
        <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px'}} />

        <div className="relative z-10 max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter !text-white">What Clients Say</h2>
          </MotionWrapper>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { quote: "Assni delivered 500 branded t-shirts for our campaign on time and the quality was exactly what we approved in the sample.", author: "Procurement Manager", company: "NGO Partner, Addis Ababa", initial: "P" },
              { quote: "Finally, a supplier that communicates clearly. The uniforms look great and the team loves wearing them.", author: "Operations Director", company: "Logistics Company, Ethiopia", initial: "O" }
            ].map((testimonial, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="backdrop-blur-md bg-white/10 border border-white/20 p-10 rounded-3xl h-full flex flex-col"
                  style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
                >
                  <div className="text-5xl text-white/40 font-serif leading-none mb-6">"</div>
                  <p className="text-lg md:text-xl text-white font-medium mb-8 flex-grow leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {testimonial.initial}
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-white/60 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
          <FAQAccordion faqs={[
            { q: "What is your minimum order quantity?", a: "Our minimum order quantity is 50 units per design." },
            { q: "How long does production take?", a: "Standard production takes 14-21 days after sample approval." },
            { q: "Do you provide samples?", a: "Yes, we provide a physical sample within 48 hours of brief approval." },
            { q: "Can you help with design?", a: "Yes, our in-house design team can help refine your concepts." },
            { q: "What printing methods do you use?", a: "We offer screen printing, embroidery, sublimation, and heat transfer." },
            { q: "Do you deliver outside Addis Ababa?", a: "Yes, we deliver across Ethiopia and handle export orders." }
          ]} />
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-balance !text-white">
              Ready to see your brand on apparel that actually looks right?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Send us a WhatsApp. Tell us what you need. We'll send you a quote within 24 hours and a sample within 48.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton
                href="https://wa.me/251911149383?text=Hi%2C+I'm+interested+in+a+quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
              >
                WhatsApp Us Now
              </MagneticButton>
              <MagneticButton
                href="/contact"
                className="bg-transparent border border-white hover:bg-white hover:text-dark-bg text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
              >
                Get a Quote
              </MagneticButton>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
