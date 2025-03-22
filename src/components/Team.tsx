
const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Ph.D in Environmental Engineering with 15+ years experience in water purification technologies.",
      image: "/images/team/placeholder.svg",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Executive Officer",
      bio: "Former sustainability executive with extensive experience scaling green technology startups.",
      image: "/images/team/placeholder.svg",
    },
    {
      name: "Emma Wilson",
      role: "Head of Research",
      bio: "Expert in photovoltaic systems and thermal energy conversion with multiple patents.",
      image: "/images/team/placeholder.svg",
    },
    {
      name: "James Kim",
      role: "Lead Engineer",
      bio: "Specialized in designing and implementing large-scale water purification systems.",
      image: "/images/team/placeholder.svg",
    },
  ];

  return (
    <section className="py-24 bg-drift-white">
      <div className="drift-container">
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient">Our Team</h2>
          <p className="text-lg text-drift-text-secondary max-w-3xl mx-auto">
            Meet the innovative minds behind Drift Pure's revolutionary technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="glass-card p-6 flex flex-col items-center text-center animate-fade-in hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-32 w-32 rounded-full bg-drift-blue/10 mb-6 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-drift-blue mb-4">{member.role}</p>
              <p className="text-drift-text-secondary text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
