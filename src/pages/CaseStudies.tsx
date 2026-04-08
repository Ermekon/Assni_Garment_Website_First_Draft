import { Link } from 'react-router-dom';
import MotionWrapper from '../components/MotionWrapper';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import { CheckCircle2 } from 'lucide-react';

export default function CaseStudies() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" hold>
            <p className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-300">
              CASE STUDIES
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance !text-white">
              Orders that had to be right. Here's how they went.
            </h1>
          </MotionWrapper>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b border-border">
        <div className="max-w-[800px] mx-auto px-4 md:px-8 text-center">
          <MotionWrapper animation="fade-up-lg">
            <p className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed">
              We don't just print logos. We solve procurement headaches, hit impossible deadlines, and deliver quality that lasts.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="py-20 md:py-32 bg-dark-bg text-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-12">
            <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
              400 T-SHIRTS · SCREEN PRINTING · 14-DAY DEADLINE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 !text-white">
              National Health Campaign Launch
            </h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <MotionWrapper animation="fade-up-lg" delay={100}>
              <h3 className="text-xl font-bold mb-4 !text-white">01. The Situation</h3>
              <p className="text-white leading-relaxed">
                A major NGO needed 400 high-quality, branded t-shirts for a nationwide health campaign launching in exactly 14 days. The shirts needed to be durable enough for field workers.
              </p>
            </MotionWrapper>
            <MotionWrapper animation="fade-up-lg" delay={200}>
              <h3 className="text-xl font-bold mb-4 !text-white">02. The Challenge</h3>
              <p className="text-white leading-relaxed">
                Their previous supplier had delivered shirts where the print cracked after one wash. They needed absolute assurance of print quality within a very tight timeframe.
              </p>
            </MotionWrapper>
            <MotionWrapper animation="fade-up-lg" delay={300}>
              <h3 className="text-xl font-bold mb-4 !text-white">03. The Outcome</h3>
              <p className="text-white leading-relaxed">
                We produced a physical sample in 48 hours. Upon approval, we used premium plastisol screen printing on 100% cotton shirts, delivering the full order 2 days ahead of schedule.
              </p>
            </MotionWrapper>
          </div>

          <MotionWrapper animation="fade-up-lg" delay={400}>
            <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
              <div className="text-4xl text-accent font-serif leading-none mb-4">"</div>
              <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                Assni delivered 400 branded t-shirts for our campaign on time and the quality was exactly what we approved in the sample. The prints are still perfect after months in the field.
              </p>
              <div>
                <div className="font-bold">Procurement Manager</div>
                <div className="text-gray-400">[NGO Name]</div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="py-20 md:py-32 bg-light-bg">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-12">
            <div className="inline-block bg-dark-bg text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
              150 UNIFORMS · EMBROIDERY · CORPORATE REBRAND
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">
              Corporate Rebrand Rollout
            </h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <MotionWrapper animation="fade-up-lg" delay={100}>
              <h3 className="text-xl font-bold mb-4 text-accent">01. The Situation</h3>
              <p className="text-gray-600 leading-relaxed">
                A leading logistics company was undergoing a complete rebrand and needed to outfit their entire delivery and warehouse staff with new, professional uniforms.
              </p>
            </MotionWrapper>
            <MotionWrapper animation="fade-up-lg" delay={200}>
              <h3 className="text-xl font-bold mb-4 text-accent">02. The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                The new logo had intricate details that were difficult to embroider clearly. The uniforms also needed to be highly durable and comfortable for physical work.
              </p>
            </MotionWrapper>
            <MotionWrapper animation="fade-up-lg" delay={300}>
              <h3 className="text-xl font-bold mb-4 text-accent">03. The Outcome</h3>
              <p className="text-gray-600 leading-relaxed">
                We optimized their logo specifically for embroidery, ensuring crisp details. We sourced a durable poly-cotton blend and delivered 150 perfectly branded uniform sets.
              </p>
            </MotionWrapper>
          </div>

          <MotionWrapper animation="fade-up-lg" delay={400}>
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-sm">
              <div className="text-4xl text-accent font-serif leading-none mb-4">"</div>
              <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                Finally, a supplier that communicates clearly. The uniforms look great, the embroidery is flawless, and the team loves wearing them.
              </p>
              <div>
                <div className="font-bold">Operations Director</div>
                <div className="text-gray-500">[Company Name]</div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">The Assni Difference</h2>
            <p className="text-lg text-gray-600">Drag the slider to see the transformation from blank garment to branded asset.</p>
          </MotionWrapper>

          <MotionWrapper animation="fade-up-lg" delay={200}>
            <BeforeAfterSlider
              beforeImage="/images/case-studies/before.jpg"
              afterImage="/images/case-studies/after.jpg"
              beforeLabel="Blank Garment"
              afterLabel="Assni Branded"
            />
          </MotionWrapper>
        </div>
      </section>

      {/* Trust Patterns */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What every project includes:</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Dedicated project manager",
              "Physical sample before production",
              "Quality control at every stage",
              "On-time delivery guarantee"
            ].map((item, i) => (
              <MotionWrapper key={i} animation="fade-up-lg" delay={i * 100}>
                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-border">
                  <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                  <span className="font-bold">{item}</span>
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
              Your order has stakes too.
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Don't risk your deadline or brand reputation on an unproven supplier. Let's get it right the first time.
            </p>
            <a 
              href="https://wa.me/251911149383?text=Hi%2C+I+have+an+important+order+to+discuss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-whatsapp hover:bg-whatsapp-hover text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              Discuss Your Project
            </a>
          </MotionWrapper>
        </div>
      </section>
    </main>
  );
}
