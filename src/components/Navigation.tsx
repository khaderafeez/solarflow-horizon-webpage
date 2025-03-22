
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUp } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-5'
      }`}>
        <nav className="drift-container flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <span className="text-xl font-bold text-drift-text">Drift Pure</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-drift-blue after:scale-x-100' : ''}`} onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-drift-blue after:scale-x-100' : ''}`}>
              About
            </Link>
            <Link to="/process" className={`nav-link ${location.pathname === '/process' ? 'text-drift-blue after:scale-x-100' : ''}`}>
              Technology
            </Link>
            <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'text-drift-blue after:scale-x-100' : ''}`}>
              Products
            </Link>
            <Link to="/#contact" className="button-primary">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="p-2 md:hidden text-drift-text focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div 
          className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="drift-container py-20 flex flex-col items-center space-y-8">
            <Link 
              to="/" 
              className="text-2xl font-medium text-drift-text hover:text-drift-blue transition-colors"
              onClick={() => {setIsOpen(false); scrollToTop();}}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-2xl font-medium text-drift-text hover:text-drift-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/process" 
              className="text-2xl font-medium text-drift-text hover:text-drift-blue transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Technology
            </Link>
            <Link 
              to="/products" 
              className="text-2xl font-medium text-drift-text hover:text-drift-blue transition-colors"
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

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-drift-blue text-white shadow-lg hover:bg-drift-blue-dark transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Navigation;
