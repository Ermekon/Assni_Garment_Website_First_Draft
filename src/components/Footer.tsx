import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white pt-20 pb-8">
      <div className="max-w-[1410px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="/images/logo/Logo_White.png" alt="Assni Garment" className="h-8 w-auto" />
            </Link>
            <p className="text-gray-400 mb-8">
              Your Brand on Every Team Member — Without the Supplier Chaos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">T-Shirts</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Tote Bags</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Uniforms</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/how-we-work" className="hover:text-white transition-colors">How We Work</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="tel:+251911149383" className="hover:text-white transition-colors">+251 911 149 383</a></li>
              <li><a href="mailto:sales@assnigarment.com" className="hover:text-white transition-colors">sales@assnigarment.com</a></li>
              <li>
                <a 
                  href="https://wa.me/251911149383?text=Hi%2C+I'm+interested+in+a+quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whatsapp hover:text-whatsapp-hover transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Assni Garment. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
