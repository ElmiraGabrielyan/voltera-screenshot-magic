import heartIcon from "@/assets/heart.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 scroll-mt-0">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="relative">
          {/* Background text - more subtle */}
          <h2 className="text-[8vw] leading-none font-bold pixel-text mb-8 text-center opacity-50">
            all
            <br />
            about
            <br />
            people, ideas, execution
          </h2>

          {/* Central Image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] flex items-center justify-center">
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

            {/* Floating labels - better arranged */}
            <div className="absolute top-[15%] left-[-25%] bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg animate-fade-in">
              <span className="text-sm font-medium tracking-wide">marketing & brand identity</span>
            </div>

            <div className="absolute top-[35%] right-[-20%] bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:200ms]">
              <span className="text-sm font-medium tracking-wide">sales outsourcing</span>
            </div>

            <div className="absolute bottom-[35%] left-[-20%] bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:400ms]">
              <span className="text-sm font-medium tracking-wide">recruiting</span>
            </div>

            <div className="absolute bottom-[15%] right-[-25%] bg-background/95 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg animate-fade-in [animation-delay:600ms]">
              <span className="text-sm font-medium tracking-wide">process automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
