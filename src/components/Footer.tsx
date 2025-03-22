
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-drift-dark py-16 border-t border-white/5">
      <div className="drift-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Drift Pure</h3>
            <p className="text-white/70 mb-4">
              Revolutionizing water purification through solar desalination technology.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://twitter.com" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-medium mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/process" className="text-white/70 hover:text-white transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-white transition-colors">Products</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-drift-blue shrink-0 mt-0.5" />
                <span className="text-white/70">info@driftpure.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-drift-blue shrink-0 mt-0.5" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-drift-blue shrink-0 mt-0.5" />
                <span className="text-white/70">123 Innovation Way, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6">Stay Updated</h3>
            <p className="text-white/70 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-drift-blue flex-grow"
              />
              <button
                type="submit"
                className="bg-drift-blue text-white px-4 py-2 rounded-r-lg hover:bg-drift-blue-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Drift Pure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
