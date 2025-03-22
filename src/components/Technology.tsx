
import { Sun, Droplet, Wind, ActivitySquare } from 'lucide-react';

const Technology = () => {
  const steps = [
    {
      icon: <Sun size={28} className="text-drift-blue" />,
      title: "Solar Collection",
      description: "Our advanced solar panels capture and convert sunlight into thermal energy with industry-leading efficiency rates.",
    },
    {
      icon: <Wind size={28} className="text-drift-blue" />,
      title: "Evaporation Process",
      description: "The thermal energy heats seawater in a closed environment, creating water vapor while leaving salt and contaminants behind.",
    },
    {
      icon: <ActivitySquare size={28} className="text-drift-blue" />,
      title: "Condensation",
      description: "The purified water vapor is then cooled and condensed back into liquid form through our innovative cooling system.",
    },
    {
      icon: <Droplet size={28} className="text-drift-blue" />,
      title: "Collection & Mineralization",
      description: "The distilled water is collected and enhanced with essential minerals before it's ready for consumption or agricultural use.",
    }
  ];

  return (
    <section id="technology-section" className="py-24 bg-drift-card">
      <div className="drift-container">
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient">Our Technology</h2>
          <p className="text-lg text-drift-text-secondary max-w-3xl mx-auto">
            Discover how our revolutionary solar desalination process works to deliver pure water with minimal environmental impact.
          </p>
        </div>

        {/* Technology Process */}
        <div className="relative">
          {/* Center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-drift-border -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative md:flex items-center ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                } mb-20`}
              >
                {/* Process step for mobile */}
                <div className="block md:hidden glass-card p-6 animate-fade-in hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-drift-blue/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-drift-text-secondary">{step.description}</p>
                </div>
                
                {/* Process steps for desktop */}
                <div className={`hidden md:block md:w-5/12 text-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div 
                    className={`glass-card p-6 ${
                      index % 2 === 0 ? 'mr-8' : 'ml-8'
                    } animate-fade-in hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? 'justify-end' : 'justify-start'
                    }`}>
                      <div className={`${index % 2 === 0 ? 'order-first' : 'order-last'}`}>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-drift-blue/10 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <p className="text-drift-text-secondary">{step.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-drift-blue"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/process" className="button-primary">
            Learn More About Our Process
          </a>
        </div>
      </div>
    </section>
  );
};

export default Technology;
