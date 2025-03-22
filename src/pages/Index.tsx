
import Hero from '../components/Hero';
import Technology from '../components/Technology';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-drift-dark text-white overflow-x-hidden">
      <Hero />
      
      {/* About Section */}
      <section id="about-section" className="py-24 bg-drift-dark">
        <div className="drift-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fade-in">
              <h2 className="section-heading text-gradient">About Drift Pure</h2>
              <p className="text-lg text-white/80 mb-6">
                Founded in 2020, Drift Pure is dedicated to solving the global water crisis through sustainable technology. Our mission is to make clean water accessible to communities worldwide while reducing environmental impact.
              </p>
              <p className="text-lg text-white/80 mb-8">
                Our revolutionary solar desalination technology uses the power of the sun to transform saltwater into fresh, drinkable water without the high energy costs and environmental damage of traditional methods.
              </p>
              <a href="/about" className="button-primary">
                Learn More About Us
              </a>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative animate-fade-in animate-delay-200">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-drift-blue to-drift-blue/30 opacity-30 blur"></div>
                <div className="glass-card p-0 overflow-hidden rounded-2xl">
                  <img 
                    src="/placeholder.svg" 
                    alt="Solar desalination technology" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Technology />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
