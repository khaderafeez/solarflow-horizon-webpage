
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-lg bg-drift-dark/80 py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <nav className="drift-container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">Drift Pure</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-white after:scale-x-100' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-white after:scale-x-100' : ''}`}>
            About
          </Link>
          <Link to="/process" className={`nav-link ${location.pathname === '/process' ? 'text-white after:scale-x-100' : ''}`}>
            Technology
          </Link>
          <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'text-white after:scale-x-100' : ''}`}>
            Products
          </Link>
          <Link to="/#contact" className="button-primary">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="p-2 md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-drift-dark/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="drift-container py-20 flex flex-col items-center space-y-8">
          <Link 
            to="/" 
            className="text-2xl font-medium text-white"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-2xl font-medium text-white"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/process" 
            className="text-2xl font-medium text-white"
            onClick={() => setIsOpen(false)}
          >
            Technology
          </Link>
          <Link 
            to="/products" 
            className="text-2xl font-medium text-white"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/#contact" 
            className="button-primary text-xl px-8 py-4 mt-4"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
