
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-drift-card py-16 border-t border-drift-border">
      <div className="drift-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-drift-text">Drift Pure</h3>
            <p className="text-drift-text-secondary mb-4">
              Revolutionizing water purification through solar desalination technology.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://twitter.com" className="text-drift-text-secondary hover:text-drift-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-drift-text-secondary hover:text-drift-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="text-drift-text-secondary hover:text-drift-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-drift-text-secondary hover:text-drift-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-drift-text">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-drift-text-secondary hover:text-drift-blue transition-colors" onClick={scrollToTop}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-drift-text-secondary hover:text-drift-blue transition-colors">About</Link>
              </li>
              <li>
                <Link to="/process" className="text-drift-text-secondary hover:text-drift-blue transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/products" className="text-drift-text-secondary hover:text-drift-blue transition-colors">Products</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-drift-text">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-drift-blue shrink-0 mt-0.5" />
                <span className="text-drift-text-secondary">info@driftpure.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-drift-blue shrink-0 mt-0.5" />
                <span className="text-drift-text-secondary">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-drift-blue shrink-0 mt-0.5" />
                <span className="text-drift-text-secondary">123 Innovation Way, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-drift-text">Stay Updated</h3>
            <p className="text-drift-text-secondary mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg bg-white border border-drift-border text-drift-text focus:outline-none focus:border-drift-blue flex-grow"
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
        
        <div className="mt-12 pt-8 border-t border-drift-border text-center text-drift-text-secondary text-sm">
          <p>© {new Date().getFullYear()} Drift Pure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
