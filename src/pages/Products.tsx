
import { CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const Products = () => {
  const productLines = [
    {
      name: "DriftPure Mini",
      caption: "For Residential & Small Community Use",
      description: "Compact desalination system ideal for households and small community applications.",
      capacity: "Up to 500 liters per day",
      idealFor: ["Small households", "Remote vacation properties", "Emergency preparedness", "Small coastal communities"],
      features: ["Compact design requires minimal space", "Simple installation with basic tools", "Low maintenance requirements", "User-friendly monitoring system", "Optional solar panel integration"]
    },
    {
      name: "DriftPure Pro",
      caption: "For Commercial & Medium-Scale Applications",
      description: "Mid-sized desalination solution for commercial properties and medium-sized communities.",
      capacity: "2,000-10,000 liters per day",
      idealFor: ["Hotels and resorts", "Agricultural operations", "Small businesses", "Medium-sized communities", "Light industrial applications"],
      features: ["Modular design for scalability", "Enhanced efficiency and throughput", "Remote monitoring and diagnostics", "Integrated pre-filtration system", "Comprehensive water quality testing"]
    },
    {
      name: "DriftPure Enterprise",
      caption: "For Industrial & Large-Scale Applications",
      description: "Industrial-grade desalination infrastructure for large-scale water production.",
      capacity: "20,000+ liters per day",
      idealFor: ["Municipalities", "Large industrial facilities", "Island communities", "Humanitarian aid projects", "Water-stressed regions"],
      features: ["Maximum scalability for growing needs", "Advanced monitoring and automation", "Dedicated engineering support", "Custom integration capabilities", "Comprehensive service packages"]
    }
  ];

  return (
    <main className="min-h-screen bg-drift-dark text-white pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-drift-dark">
        <div className="drift-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gradient mb-8 animate-fade-in">
              Our Product Solutions
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
              Explore our range of solar desalination systems designed to meet various scale requirements, from residential use to industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-16 bg-drift-dark-accent">
        <div className="drift-container">
          <h2 className="section-heading text-center mb-16 text-gradient">Product Lineup</h2>
          
          <div className="space-y-20">
            {productLines.map((product, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 items-center">
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative animate-fade-in">
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-drift-blue to-drift-blue/30 opacity-30 blur"></div>
                    <div className="glass-card p-0 overflow-hidden rounded-2xl">
                      <img 
                        src="/placeholder.svg" 
                        alt={product.name} 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="animate-fade-in animate-delay-200">
                    <div className="mb-2">
                      <span className="px-3 py-1 rounded-full text-xs bg-drift-blue/20 text-drift-blue">
                        {product.caption}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                    <p className="text-lg text-white/80 mb-6">{product.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">Capacity</h4>
                      <p className="text-xl font-medium">{product.capacity}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm uppercase tracking-wider text-white/60 mb-3">Ideal For</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                        {product.idealFor.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-drift-blue" />
                            <span className="text-white/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-white/60 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-drift-blue shrink-0 mt-0.5" />
                            <span className="text-white/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <a href="/#contact" className="button-primary">
                        Request Information
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="py-16 bg-drift-dark">
        <div className="drift-container">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fade-in">
              <h2 className="section-heading">Custom Solutions</h2>
              <p className="text-lg text-white/80 mb-6">
                Beyond our standard product lineup, Drift Pure offers customized desalination solutions tailored to your specific needs and environmental conditions.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Our engineering team works closely with clients to design bespoke systems that consider factors such as:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Specific water quality requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Available space and infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Local environmental conditions and solar availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Integration with existing water systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Budget and timeline constraints</span>
                </li>
              </ul>
              <a href="/#contact" className="button-primary">
                Discuss Custom Solutions
              </a>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative animate-fade-in animate-delay-200">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-drift-blue to-drift-blue/30 opacity-30 blur"></div>
                <div className="glass-card p-0 overflow-hidden rounded-2xl">
                  <img 
                    src="/placeholder.svg" 
                    alt="Custom desalination solutions" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service & Support */}
      <section className="py-16 bg-drift-dark-accent">
        <div className="drift-container">
          <h2 className="section-heading text-center mb-12 text-gradient">Service & Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Installation</h3>
              <p className="text-white/80 mb-6">
                Our certified technicians ensure proper installation and initial setup of your Drift Pure system, optimizing its performance for your specific conditions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Site preparation guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Professional installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">System calibration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Operational training</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 animate-fade-in animate-delay-200">
              <h3 className="text-xl font-semibold mb-4">Maintenance</h3>
              <p className="text-white/80 mb-6">
                Regular maintenance ensures your system operates at peak efficiency throughout its lifespan, minimizing downtime and maximizing water production.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Scheduled maintenance visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Component inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Filter replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Performance optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 animate-fade-in animate-delay-300">
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <p className="text-white/80 mb-6">
                Our dedicated support team is available to address any questions or concerns about your Drift Pure system, ensuring continuous operation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">24/7 technical support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Remote diagnostics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Emergency service</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-drift-blue shrink-0 mt-0.5" />
                  <span className="text-white/80">Software updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-drift-dark">
        <div className="drift-container">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Find Your Perfect Solution</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Contact us today to discuss which Drift Pure system is right for your water purification needs.
            </p>
            <a href="/#contact" className="button-primary">
              Request a Consultation
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Products;
