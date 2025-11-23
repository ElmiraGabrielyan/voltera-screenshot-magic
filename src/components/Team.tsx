const Team = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20">
          <div>
            <h2 className="text-6xl font-bold leading-tight">
              The people
              <br />
              behind the work.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-lg mb-4">
              We're a small,hands-on team{" "}
              <span className="font-semibold text-foreground">
                with background in marketing, sales, team recruitement and product operations.
              </span>
            </p>
            <p className="text-muted-foreground">
              Our work is personal, practical, and focused on what your business actually needs.
            </p>
          </div>
        </div>

        {/* Team images grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative aspect-[3/4] bg-muted rounded-3xl overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
          </div>
          <div className="relative aspect-[3/4] bg-muted rounded-3xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform md:mt-12">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
