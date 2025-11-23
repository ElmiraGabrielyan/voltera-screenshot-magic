import heartIcon from "@/assets/heart.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24">
      <div className="container mx-auto px-8 lg:px-16 py-24">
        <div className="relative">
          {/* Dotted headline */}
          <h2 className="text-[12vw] leading-none font-bold dotted-text mb-0 text-center" style={{ color: '#D6D6D6' }}>
            all
            <br />
            about
            <br />
            people, ideas, execution
          </h2>

          {/* Central Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] flex items-center justify-center">
            <img src={heartIcon} alt="Heart icon" className="w-full h-full object-contain drop-shadow-2xl animate-float" style={{ filter: 'brightness(0) saturate(100%) invert(95%) sepia(100%) saturate(2000%) hue-rotate(0deg)' }} />

            {/* Floating labels */}
            <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-sm px-5 py-2.5 rounded-full border border-border shadow-lg animate-fade-in">
              <span className="text-sm font-medium">marketing & brand identity</span>
            </div>

            <div className="absolute top-[35%] right-[-20%] bg-background/90 backdrop-blur-sm px-5 py-2.5 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:200ms]">
              <span className="text-sm font-medium">sales outsourcing</span>
            </div>

            <div className="absolute bottom-[35%] left-[-20%] bg-background/90 backdrop-blur-sm px-5 py-2.5 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:400ms]">
              <span className="text-sm font-medium">recruiting</span>
            </div>

            <div className="absolute bottom-[-15%] right-[-10%] bg-background/90 backdrop-blur-sm px-5 py-2.5 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:600ms]">
              <span className="text-sm font-medium">process automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
