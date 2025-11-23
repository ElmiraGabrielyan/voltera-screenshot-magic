const Services = () => {
  const services = [
    {
      title: "Branding",
      description: "We help brands look sharp, sound right, and work better — online and off.",
    },
    {
      title: "PR & marketing",
      description: "Launch campaigns, content, positioning — from press releases to product messaging.",
    },
    {
      title: "Web & app design",
      description: "Clean, considered, conversion-focused. Built around your business, not a template.",
    },
    {
      title: "Front-end development",
      description: "Framer, Webflow, or hand-coded. Every build is fast, responsive, and beautiful to the last pixel.",
    },
  ];

  return (
    <section className="py-32 bg-dark-surface text-dark-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-24">
          <h2 className="text-[8vw] leading-none font-bold pixel-text mb-8 opacity-60" style={{ color: '#D6D6D6' }}>
            under the
            <br />
            hood
          </h2>
        </div>

        {/* Services diagram */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center logo */}
          <div className="flex justify-center mb-16">
            <div className="w-48 h-48 rounded-3xl border border-dark-muted/20 flex items-center justify-center bg-dark-surface/50 backdrop-blur-sm">
              <span className="text-3xl font-bold">volterā.</span>
            </div>
          </div>

          {/* Connector line */}
          <div className="absolute top-48 left-1/2 w-px h-20 bg-dark-muted/20 -translate-x-1/2"></div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {services.map((service, index) => (
              <div key={index} className="relative">
                {/* Connector dots */}
                <div className="absolute -top-24 left-1/2 w-3 h-3 rounded-full bg-dark-muted/40 -translate-x-1/2"></div>
                <div className="absolute -top-24 left-1/2 w-px h-24 bg-dark-muted/20 -translate-x-1/2"></div>
                
                <div className="border border-dark-muted/20 rounded-3xl p-8 bg-dark-surface/50 backdrop-blur-sm h-full hover:border-accent/40 transition-colors">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-dark-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
