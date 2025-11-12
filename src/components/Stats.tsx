const Stats = () => {
  const stats = [
    {
      number: "8",
      label: "Years in the game.",
      description: "A decade of building brands, launching products, and shipping clean, conversion-focused design.",
    },
    {
      number: "80+",
      label: "Happy clients.",
      description: "Long-term partnerships, repeat business, and glowing testimonials fuel what we do.",
    },
    {
      number: "$8M",
      label: "Raised for clients.",
      description: "Our work helped founders secure funding — from pre-seed to Series A and beyond.",
    },
    {
      number: "150+",
      label: "Completed projects.",
      description: "Funding won through work delivered on time, on brand, and with intent.",
    },
  ];

  return (
    <section className="py-32 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-7xl font-bold mb-4">{stat.number}</div>
              <h3 className="text-2xl font-bold mb-3">{stat.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trusted by section */}
        <div className="mt-32">
          <h3 className="text-4xl font-bold mb-16 max-w-2xl">
            Trusted by teams from early to established. Built to support every stage.
          </h3>
          
          <div className="flex items-center justify-center gap-20 flex-wrap grayscale opacity-60">
            <div className="text-4xl font-bold">COMPANY</div>
            <div className="text-4xl font-bold">BRAND</div>
            <div className="text-4xl font-bold">STARTUP</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
