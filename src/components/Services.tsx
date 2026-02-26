const Services = () => {
  const services = [
    {
      title: "Marketing Services",
      items: [
        "Brand strategy, branding, positioning & messaging",
        "Lead generation systems (inbound & outbound)",
        "Funnel architecture & landing page optimization/creation"
      ],
    },
    {
      title: "Sales & Revenue Systems",
      items: [
        "CRM setup, customization & optimization",
        "Lead qualification, scoring & routing",
        "Sales pipelines and automated follow-up systems"
      ],
    },
    {
      title: "Creative Production",
      items: [
        "Video and Ad creative production",
        "Content systems for ads, social media and email marketing"
      ],
    },
    {
      title: "Operations & Automation",
      items: [
        "Internal systems and workflows design",
        "Process automation tools",
        "Internal assistants for support and onboarding"
      ],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-dark-surface text-dark-foreground scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-[12vw] sm:text-[10vw] lg:text-[8vw] leading-none font-bold mb-6 sm:mb-8" style={{ color: '#DCDCDC' }}>
            under the
            <br />
            hood
          </h2>
        </div>

        {/* Services diagram */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center logo */}
          <div className="flex justify-center mb-8 sm:mb-12 lg:mb-16">
            <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-2xl sm:rounded-3xl border border-dark-muted/20 flex items-center justify-center bg-dark-surface/50 backdrop-blur-sm">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold">volterā.</span>
            </div>
          </div>

          {/* Connector line - hidden on mobile, visible on lg */}
          <div className="hidden lg:block absolute top-48 left-1/2 w-px h-20 bg-dark-muted/20 -translate-x-1/2"></div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12 lg:mt-16">
            {services.map((service, index) => (
              <div key={index} className="relative">
                {/* Connector dots - hidden on mobile, visible on lg */}
                <div className="hidden lg:block absolute -top-24 left-1/2 w-3 h-3 rounded-full bg-dark-muted/40 -translate-x-1/2"></div>
                <div className="hidden lg:block absolute -top-24 left-1/2 w-px h-24 bg-dark-muted/20 -translate-x-1/2"></div>
                
                <div className="border border-dark-muted/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 bg-dark-surface/50 backdrop-blur-sm h-full hover:border-accent/40 transition-colors">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-5 lg:mb-6">{service.title}</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-dark-muted text-xs sm:text-sm leading-relaxed flex items-start">
                        <span className="mr-2 text-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
