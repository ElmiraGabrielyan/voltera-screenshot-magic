const Process = () => {
  // Hidden from visitors - phases timeline
  /*
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
  */

  const features = [
    "Marketing that’s organised and consistent",
    "Clear, reliable sales execution",
    "Clear steps for finding and selecting the right people",
    "Simple, effective process automation",
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-dark-surface text-dark-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Left side - Features */}
          <div className="order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-dark-muted text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
              A clear,research driven, structured way of working that improves how your team markets, sells, and
              operates.
            </h2>
            <p className="text-dark-muted mb-2 text-sm sm:text-base">
              Our work covers the essentials: marketing delivered consistently, sales supported end-to-end, hiring for
              the right commercial roles, and automations that keep things running smoothly.{" "}
              <span className="text-dark-foreground font-semibold">
                We build everything with your team and focus on outcomes that stay reliable over time.
              </span>
            </p>
          </div>
        </div>

        {/* Timeline - Hidden from visitors */}
        {/*
        <div className="mt-24 relative">
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
        */}
      </div>
    </section>
  );
};

export default Process;
