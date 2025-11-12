import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-32 bg-dark-surface text-dark-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-dark-muted/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[8vw] leading-none font-bold dotted-text mb-12">
            let's build
            <br />
            something great.
          </h2>
          
          <p className="text-xl mb-4">
            <span className="text-dark-foreground font-medium">Let's talk about your next move.</span>{" "}
            <span className="text-dark-muted">
              Whether it's strategy, design, or both — we're here to help.
            </span>
          </p>

          <Button 
            size="lg" 
            className="bg-background hover:bg-background/90 text-foreground font-medium rounded-full px-8 mt-12 text-lg h-14"
          >
            Contact
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
