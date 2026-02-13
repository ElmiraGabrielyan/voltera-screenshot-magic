const Stats = () => {
  const stats = [
    {
      number: "14",
      label: "Years in growth roles.",
      description: "A joint background across product, marketing, sales, and operations - built inside real companies.",
    },
    {
      number: "36+",
      label: "Companies supported.",
      description:
        "Hands-on experience inside different teams, scale-ups, and SMBs - understanding how businesses truly operate.",
    },
    {
      number: "$11M",
      label: "Sales & marketing scale handled.",
      description: "Real estate transactions + multi-million marketing budgets.",
    },
    {
      number: "50",
      label: "Major projects delivered.",
      description: "Funnels, hiring systems, marketing campaigns, content, and operational structures.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 relative">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4">{stat.number}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{stat.label}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Trusted by section */}
        <div className="mt-16 sm:mt-24 lg:mt-32">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 lg:mb-16 max-w-2xl">
            We work with teams to organise their people, their ideas, and their daily execution across marketing, sales,
            and recruitment.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Stats;
