import heartIcon from "@/assets/heart.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="relative">
          {/* Dotted headline */}
          <h2 className="text-[12vw] leading-none font-bold dotted-text mb-8 text-center">
            design led strategy
            <br />
            with sustainable
            <br />
            impact.
          </h2>

          {/* Central Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] flex items-center justify-center">
            <img src={heartIcon} alt="Heart icon" className="w-full h-full object-contain drop-shadow-2xl animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(95%) sepia(100%) saturate(2000%) hue-rotate(0deg)' }} />

            {/* Floating labels */}
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-lg">
              <span className="text-sm font-medium">marketing & brand identity</span>
            </div>

            <div className="absolute top-[45%] right-[-20%] bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-lg">
              <span className="text-sm font-medium">sales outsourcing</span>
            </div>

            <div className="absolute bottom-[20%] left-[-15%] bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-lg">
              <span className="text-sm font-medium">recruiting</span>
            </div>

            <div className="absolute bottom-[15%] right-[-15%] bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-lg">
              <span className="text-sm font-medium">process automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
