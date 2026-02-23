import heartIcon from "@/assets/heart.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 sm:pt-20 scroll-mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="relative flex flex-col items-center">
          {/* Background text - responsive sizing */}
          <h2 className="text-[10vw] sm:text-[8vw] lg:text-[7vw] leading-none font-bold pixel-text mb-8 sm:mb-12 lg:mb-8 text-center text-gray-500 max-w-4xl">
            all
            <br />
            about
            <br />
            people, ideas, execution
          </h2>

          {/* Central Image with labels - responsive layout */}
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] aspect-square flex items-center justify-center mt-8 lg:mt-0">
            <Image
              src={heartIcon}
              alt="Heart icon"
              width={400}
              height={400}
              className="w-full h-full object-contain drop-shadow-2xl animate-float opacity-90"
              style={{
                filter: "brightness(0) saturate(100%) invert(95%) sepia(100%) saturate(2000%) hue-rotate(0deg)",
              }}
            />

            {/* Floating labels - mobile: stacked below, desktop: positioned around */}
            {/* Desktop labels - hidden on mobile */}
            <div className="hidden lg:block absolute top-[15%] left-[-25%] bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg animate-fade-in">
              <span className="text-sm font-medium tracking-wide">marketing & brand identity</span>
            </div>

            <div className="hidden lg:block absolute top-[35%] right-[-20%] bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:200ms]">
              <span className="text-sm font-medium tracking-wide">sales outsourcing</span>
            </div>

            <div className="hidden lg:block absolute bottom-[35%] left-[-20%] bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:400ms]">
              <span className="text-sm font-medium tracking-wide">recruiting</span>
            </div>

            <div className="hidden lg:block absolute bottom-[15%] right-[-25%] bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:600ms]">
              <span className="text-sm font-medium tracking-wide">process automation</span>
            </div>
          </div>

          {/* Mobile labels - grid layout below heart */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-12 w-full max-w-lg">
            <div className="bg-background/95 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border shadow-lg animate-fade-in text-center">
              <span className="text-xs sm:text-sm font-medium tracking-wide">marketing & brand identity</span>
            </div>

            <div className="bg-background/95 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:200ms] text-center">
              <span className="text-xs sm:text-sm font-medium tracking-wide">sales outsourcing</span>
            </div>

            <div className="bg-background/95 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:400ms] text-center">
              <span className="text-xs sm:text-sm font-medium tracking-wide">recruiting</span>
            </div>

            <div className="bg-background/95 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:600ms] text-center">
              <span className="text-xs sm:text-sm font-medium tracking-wide">process automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
