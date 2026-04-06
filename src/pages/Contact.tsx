import MotionWrapper from '../components/MotionWrapper';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <main>
      <section className="py-24 md:py-32 bg-dark-bg text-white text-center">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <MotionWrapper animation="fade-up-lg" hold>
            <p className="text-sm font-bold tracking-widest uppercase mb-6 text-gray-300">
              CONTACT US
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance">
              Let's discuss your next order.
            </h1>
          </MotionWrapper>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1410px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <MotionWrapper animation="fade-up-lg">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MessageCircle className="text-whatsapp mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Fastest way to get a quote.</p>
                    <a href="https://wa.me/251911149383" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:underline">+251 911 149 383</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">Call us directly.</p>
                    <a href="tel:+251911149383" className="text-accent font-bold hover:underline">+251 911 149 383</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">For detailed briefs and RFQs.</p>
                    <a href="mailto:sales@assnigarment.com" className="text-accent font-bold hover:underline">sales@assnigarment.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper animation="fade-up-lg" delay={200}>
              <div className="bg-light-bg p-8 md:p-12 rounded-3xl border border-border">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-bold mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-accent" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email or Phone</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-accent" placeholder="How can we reach you?" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">What do you need?</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-accent" placeholder="Product type, quantity, deadline..."></textarea>
                  </div>
                  <button type="button" className="w-full bg-dark-bg hover:bg-black text-white py-4 rounded-full font-bold transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>
    </main>
  );
}
