
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(1 - scrollPosition / 700, 0.2);
        const translateY = scrollPosition * 0.4;
        
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-drift-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-drift-dark-accent to-drift-dark"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-drift-blue/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-drift-blue/5 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Hero Content */}
      <div 
        ref={heroRef}
        className="drift-container relative z-10 text-center px-4 py-20 md:py-0"
      >
        <div className="inline-block mb-8 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs md:text-sm bg-white/10 backdrop-blur-sm border border-white/10 text-white/90">
            Revolutionizing Water Purification
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold animate-fade-in text-shadow leading-tight">
          <span className="text-gradient">Pure Water</span><br />
          <span className="animate-fade-in-delay">Through Solar Innovation</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in animate-delay-200">
          Drift Pure harnesses the power of solar energy to create sustainable desalination technology that transforms saltwater into clean, drinkable water.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animate-delay-300">
          <a href="#about-section" className="button-primary">
            Discover Our Technology
          </a>
          <a href="#contact" className="button-secondary">
            Get In Touch
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-pulse">
        <button 
          onClick={scrollToNextSection}
          className="text-white/70 hover:text-white transition-colors focus:outline-none"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={36} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
