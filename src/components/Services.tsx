const Services = () => {
  const services = [
    {
      title: "Marketing & Brand Identity",
      items: [
        "Outsource Omni-channel Marketing team",
        "Branding",
        "Commercial Production",
        "Customer Hypercare flow",
        "Landing pages",
        "Content creation"
      ],
    },
    {
      title: "Sales Outsourcing",
      items: [
        "Outsourced or hybrid sales teams",
        "Lead generation and qualification",
        "Seller and investor pitch decks",
        "CRM implementation & optimization",
        "Sales funnel automation",
        "Ongoing conversion optimization and reporting"
      ],
    },
    {
      title: "Recruiting",
      items: [
        "Outsourced recruitment team",
        "Onboarding and trainings",
        '"Hiring Starter Pack"',
        "Expo hostesses and training sessions"
      ],
    },
    {
      title: "Process Automation",
      items: [
        "Custom internal AI agents (onboarding assistant, support chatbot, etc.)",
        "Recruitment process automation (candidate screening, scheduling, etc.)",
        "Process improvement tools (internal CRMs, KPI dashboards, etc.)",
        "Lead qualification bots"
      ],
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
                  <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-dark-muted text-sm leading-relaxed flex items-start">
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
