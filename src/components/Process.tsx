const Process = () => {
  const phases = [
    {
      phase: "Discovery",
      items: [
        { name: "Stakeholder interviews & briefing", progress: 70 },
        { name: "User & market research", progress: 85 },
      ],
    },
    {
      phase: "Concept",
      items: [
        { name: "Creative & strategic exploration", progress: 90 },
        { name: "Direction alignment", progress: 60 },
        { name: "Concept refinement", progress: 95 },
      ],
    },
    {
      phase: "Execution",
      items: [
        { name: "Design systems", progress: 75 },
        { name: "Iterative testing & QA", progress: 80 },
      ],
    },
    {
      phase: "Launch",
      items: [
        { name: "Rollout & support", progress: 65 },
        { name: "Post-launch optimisations", progress: 70 },
      ],
    },
  ];

  const features = [
    "Methodical process",
    "Research-informed decisions",
    "Scalable by default",
    "Collaborative checkpoints",
  ];

  return (
    <section className="py-32 bg-dark-surface text-dark-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left side - Features */}
          <div>
            <div className="space-y-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-muted">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              A methodical, research driven process that delivers lasting outcomes.
            </h2>
            <p className="text-dark-muted mb-2">
              Over time we refined a rigorous, collaborative approach that keeps teams aligned
              and drives measurable results.{" "}
              <span className="text-dark-foreground font-semibold">
                We aim for lasting impact, not just hand-offs.
              </span>
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 relative">
          {/* Vertical progress line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-dark-muted/20 hidden lg:block"></div>
          <div className="absolute left-0 top-0 w-px h-1/2 bg-accent hidden lg:block"></div>
          <div className="absolute left-0 top-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-16 lg:pl-16">
            {phases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="relative">
                <h3 className="text-3xl font-bold mb-6">{phase.phase}</h3>
                <div className="space-y-4">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-dark-muted/10 rounded-full overflow-hidden">
                      <div className="px-6 py-4 relative">
                        <div 
                          className="absolute inset-0 bg-dark-muted/20 rounded-full"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                        <span className="relative text-sm text-dark-foreground">{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
