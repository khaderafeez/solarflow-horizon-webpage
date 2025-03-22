
import { ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';

const Process = () => {
  const benefits = [
    {
      title: "Sustainable",
      description: "Our process relies primarily on solar energy, significantly reducing carbon emissions compared to traditional desalination methods."
    },
    {
      title: "Cost-Effective",
      description: "Lower energy requirements translate to reduced operational costs over the system's lifetime."
    },
    {
      title: "Scalable",
      description: "Our modular design allows for easy scaling from small community systems to large industrial installations."
    },
    {
      title: "Low Maintenance",
      description: "Simplified mechanics and high-quality materials ensure minimal maintenance requirements and extended system lifespan."
    },
    {
      title: "Zero Discharge",
      description: "Our closed-loop system minimizes brine discharge, protecting marine ecosystems from harmful salt concentration."
    },
    {
      title: "Off-Grid Capability",
      description: "Systems can operate independently of the power grid, making them ideal for remote or underserved communities."
    }
  ];

  return (
    <main className="min-h-screen bg-drift-dark text-white pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-drift-dark">
        <div className="drift-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gradient mb-8 animate-fade-in">
              Our Solar Desalination Process
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
              Discover how we harness the power of the sun to transform saltwater into clean, drinkable water through our innovative and sustainable process.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-drift-dark-accent">
        <div className="drift-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fade-in">
              <h2 className="section-heading">The Challenge</h2>
              <p className="text-lg text-white/80 mb-6">
                Traditional desalination methods, while effective, come with significant drawbacks:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-drift-blue shrink-0 mt-1" />
                  <span className="text-white/80">High energy consumption, often relying on fossil fuels</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-drift-blue shrink-0 mt-1" />
                  <span className="text-white/80">Significant carbon footprint and environmental impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-drift-blue shrink-0 mt-1" />
                  <span className="text-white/80">Expensive infrastructure and operational costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={20} className="text-drift-blue shrink-0 mt-1" />
                  <span className="text-white/80">Harmful brine discharge that damages marine ecosystems</span>
                </li>
              </ul>
              <p className="text-lg text-white/80 mb-6">
                Drift Pure's solar desalination technology addresses these challenges by using renewable energy and a closed-loop system designed to minimize environmental impact.
              </p>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative animate-fade-in animate-delay-200">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-drift-blue to-drift-blue/30 opacity-30 blur"></div>
                <div className="glass-card p-0 overflow-hidden rounded-2xl">
                  <img 
                    src="/placeholder.svg" 
                    alt="Traditional desalination challenges" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-16 bg-drift-dark">
        <div className="drift-container">
          <h2 className="section-heading text-center mb-12 text-gradient">How It Works</h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="relative md:flex items-center justify-end">
                <div className="md:w-5/12 md:text-right animate-fade-in">
                  <div className="glass-card p-6 md:mr-8">
                    <h3 className="text-xl font-semibold mb-4">1. Solar Energy Collection</h3>
                    <p className="text-white/80">
                      Our advanced solar collection panels capture sunlight and convert it to thermal energy with maximum efficiency. These specially designed panels minimize heat loss and optimize energy transfer to the desalination chamber.
                    </p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-drift-blue"></div>
                
                {/* Mobile version */}
                <div className="block md:hidden glass-card p-6 animate-fade-in">
                  <h3 className="text-xl font-semibold mb-4">1. Solar Energy Collection</h3>
                  <p className="text-white/80">
                    Our advanced solar collection panels capture sunlight and convert it to thermal energy with maximum efficiency. These specially designed panels minimize heat loss and optimize energy transfer to the desalination chamber.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative md:flex items-center justify-start">
                <div className="md:w-5/12 animate-fade-in">
                  <div className="glass-card p-6 md:ml-8">
                    <h3 className="text-xl font-semibold mb-4">2. Seawater Intake & Filtration</h3>
                    <p className="text-white/80">
                      Saltwater enters the system through an intake and undergoes initial filtration to remove larger particles. This pre-treatment ensures optimal operation and extends the system's lifespan by preventing buildup and clogging.
                    </p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-drift-blue"></div>
                
                {/* Mobile version */}
                <div className="block md:hidden glass-card p-6 animate-fade-in">
                  <h3 className="text-xl font-semibold mb-4">2. Seawater Intake & Filtration</h3>
                  <p className="text-white/80">
                    Saltwater enters the system through an intake and undergoes initial filtration to remove larger particles. This pre-treatment ensures optimal operation and extends the system's lifespan by preventing buildup and clogging.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative md:flex items-center justify-end">
                <div className="md:w-5/12 md:text-right animate-fade-in">
                  <div className="glass-card p-6 md:mr-8">
                    <h3 className="text-xl font-semibold mb-4">3. Solar Thermal Evaporation</h3>
                    <p className="text-white/80">
                      The filtered seawater enters a specialized evaporation chamber heated by the collected solar energy. The water evaporates, leaving behind salt and contaminants. Our patented design maximizes evaporation efficiency while minimizing energy consumption.
                    </p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-drift-blue"></div>
                
                {/* Mobile version */}
                <div className="block md:hidden glass-card p-6 animate-fade-in">
                  <h3 className="text-xl font-semibold mb-4">3. Solar Thermal Evaporation</h3>
                  <p className="text-white/80">
                    The filtered seawater enters a specialized evaporation chamber heated by the collected solar energy. The water evaporates, leaving behind salt and contaminants. Our patented design maximizes evaporation efficiency while minimizing energy consumption.
                  </p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative md:flex items-center justify-start">
                <div className="md:w-5/12 animate-fade-in">
                  <div className="glass-card p-6 md:ml-8">
                    <h3 className="text-xl font-semibold mb-4">4. Condensation & Collection</h3>
                    <p className="text-white/80">
                      The purified water vapor moves to a condensation chamber where it cools and returns to liquid form. This distilled water is collected in a reservoir, free from salt and most contaminants. Our condensation system is designed for maximum recovery rate.
                    </p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-drift-blue"></div>
                
                {/* Mobile version */}
                <div className="block md:hidden glass-card p-6 animate-fade-in">
                  <h3 className="text-xl font-semibold mb-4">4. Condensation & Collection</h3>
                  <p className="text-white/80">
                    The purified water vapor moves to a condensation chamber where it cools and returns to liquid form. This distilled water is collected in a reservoir, free from salt and most contaminants. Our condensation system is designed for maximum recovery rate.
                  </p>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="relative md:flex items-center justify-end">
                <div className="md:w-5/12 md:text-right animate-fade-in">
                  <div className="glass-card p-6 md:mr-8">
                    <h3 className="text-xl font-semibold mb-4">5. Remineralization & Final Treatment</h3>
                    <p className="text-white/80">
                      The distilled water passes through a remineralization unit that adds essential minerals for taste and health benefits. A final treatment ensures the water meets all safety standards before distribution for drinking, agriculture, or industrial use.
                    </p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-drift-blue"></div>
                
                {/* Mobile version */}
                <div className="block md:hidden glass-card p-6 animate-fade-in">
                  <h3 className="text-xl font-semibold mb-4">5. Remineralization & Final Treatment</h3>
                  <p className="text-white/80">
                    The distilled water passes through a remineralization unit that adds essential minerals for taste and health benefits. A final treatment ensures the water meets all safety standards before distribution for drinking, agriculture, or industrial use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-drift-dark-accent">
        <div className="drift-container">
          <h2 className="section-heading text-center mb-12 text-gradient">Benefits of Our Technology</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="glass-card p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-white/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-drift-dark">
        <div className="drift-container">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Water Access?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Learn how our solar desalination technology can be implemented in your community or project.
            </p>
            <a href="/#contact" className="button-primary">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Process;
