
import { ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const About = () => {
  const milestones = [
    { year: 2020, title: "Inception", description: "Drift Pure was founded with a vision to revolutionize water desalination." },
    { year: 2021, title: "Prototype Development", description: "First functional solar desalination prototype developed and tested." },
    { year: 2022, title: "Seed Funding", description: "Secured $5 million in seed funding to scale operations." },
    { year: 2023, title: "First Installation", description: "Completed first commercial installation in a coastal community." },
    { year: 2024, title: "Global Expansion", description: "Beginning partnerships with organizations worldwide." },
  ];

  return (
    <main className="min-h-screen bg-drift-dark text-white pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-drift-dark">
        <div className="drift-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gradient mb-8 animate-fade-in">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
              At Drift Pure, we're on a mission to transform how the world accesses clean water. Through innovative solar desalination technology, we're working to make pure water accessible to all while minimizing environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-drift-dark-accent">
        <div className="drift-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1 animate-fade-in">
              <h2 className="section-heading">Our Story</h2>
              <p className="text-lg text-white/80 mb-6">
                Drift Pure was born from a critical observation: while water covers 71% of our planet, only a fraction is drinkable, and existing desalination methods are energy-intensive and environmentally harmful.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Our founders, a team of environmental engineers and renewable energy experts, came together with a shared vision: to create a sustainable water purification solution that harnesses the abundance of solar energy.
              </p>
              <p className="text-lg text-white/80 mb-6">
                After years of research and development, we successfully designed a solar desalination system that efficiently converts saltwater to pure, drinkable water using minimal external energy and producing zero harmful byproducts.
              </p>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative animate-fade-in animate-delay-200">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-drift-blue to-drift-blue/30 opacity-30 blur"></div>
                <div className="glass-card p-0 overflow-hidden rounded-2xl">
                  <img 
                    src="/placeholder.svg" 
                    alt="Our team working on solar desalination" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-drift-dark">
        <div className="drift-container">
          <h2 className="section-heading text-center mb-12 text-gradient">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-white/80">
                We are committed to developing solutions that minimize environmental impact and contribute to a more sustainable future.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in animate-delay-200">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-white/80">
                We continuously push the boundaries of what's possible in water purification technology through creative problem-solving.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in animate-delay-300">
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="text-white/80">
                We believe clean water is a basic human right and work to make our solutions accessible to communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-16 bg-drift-dark-accent">
        <div className="drift-container">
          <h2 className="section-heading text-center mb-12 text-gradient">Our Journey</h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 lg:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 lg:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex flex-col lg:flex-row lg:items-center gap-8 ${
                    index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                  }`}>
                    {/* Circle marker */}
                    <div className="absolute left-3 lg:left-1/2 w-6 h-6 rounded-full bg-drift-blue lg:-translate-x-1/2"></div>
                    
                    {/* Year indicator (desktop) */}
                    <div className={`hidden lg:block lg:w-5/12 lg:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                      <span className="text-4xl font-bold text-drift-blue">{milestone.year}</span>
                    </div>
                    
                    {/* Content (mobile) */}
                    <div className="ml-12 lg:hidden">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-2xl font-bold text-drift-blue">{milestone.year}</span>
                        <h3 className="text-xl font-semibold">{milestone.title}</h3>
                      </div>
                      <p className="text-white/80">{milestone.description}</p>
                    </div>
                    
                    {/* Content (desktop) */}
                    <div className={`hidden lg:block lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
                    }`}>
                      <div className="glass-card p-6">
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-white/80">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-drift-dark">
        <div className="drift-container">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Together, we can revolutionize access to clean water and create a more sustainable future for generations to come.
            </p>
            <a href="/#contact" className="button-primary inline-flex items-center gap-2">
              <span>Get In Touch</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default About;
