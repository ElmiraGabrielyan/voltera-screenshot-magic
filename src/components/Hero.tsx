import heartIcon from "@/assets/heart.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16 sm:pt-20 scroll-mt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="relative flex flex-col items-center">
          {/* Text + heart overlap: grey text behind, yellow pixel heart on top, labels on top */}
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] aspect-square flex items-center justify-center">
            {/* Layer 1: textured grey text (behind heart) */}
            <h2 className="absolute inset-0 flex items-center justify-center text-[10vw] sm:text-[8vw] lg:text-[7vw] leading-none font-bold text-center max-w-4xl z-0 pointer-events-none" style={{ color: '#DCDCDC' }}>
              all
              <br />
              about
              <br />
              people, ideas, execution
            </h2>

            {/* Layer 2: bright yellow pixel heart */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                src={heartIcon}
                alt="Heart icon"
                width={400}
                height={400}
                className="w-full h-full object-contain drop-shadow-2xl animate-float"
                style={{
                  filter: "brightness(0) saturate(100%) invert(85%) sepia(100%) saturate(2000%) hue-rotate(0deg)",
                }}
              />

              {/* Layer 3: white pill labels (on top of heart) */}
              <div className="hidden lg:block absolute top-[15%] left-[-25%] bg-white px-6 py-3 rounded-full border border-gray-200 shadow-lg animate-fade-in z-20">
                <span className="text-sm font-medium tracking-wide text-black">marketing & brand identity</span>
              </div>
              <div className="hidden lg:block absolute top-[35%] right-[-20%] bg-white px-6 py-3 rounded-full border border-gray-200 shadow-lg animate-fade-in [animation-delay:200ms] z-20">
                <span className="text-sm font-medium tracking-wide text-black">sales outsourcing</span>
              </div>
              <div className="hidden lg:block absolute bottom-[35%] left-[-20%] bg-white px-6 py-3 rounded-full border border-gray-200 shadow-lg animate-fade-in [animation-delay:400ms] z-20">
                <span className="text-sm font-medium tracking-wide text-black">recruiting</span>
              </div>
              <div className="hidden lg:block absolute bottom-[15%] right-[-25%] bg-white px-6 py-3 rounded-full border border-gray-200 shadow-lg animate-fade-in [animation-delay:600ms] z-20">
                <span className="text-sm font-medium tracking-wide text-black">process automation</span>
              </div>
            </div>
          </div>

          {/* Mobile labels - white pills below heart */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-12 w-full max-w-lg">
            <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-lg animate-fade-in text-center">
              <span className="text-xs sm:text-sm font-medium tracking-wide text-black">marketing & brand identity</span>
            </div>
            <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-lg animate-fade-in [animation-delay:200ms] text-center">
              <span className="text-xs sm:text-sm font-medium tracking-wide text-black">sales outsourcing</span>
            </div>
            <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-lg animate-fade-in [animation-delay:400ms] text-center">
              <span className="text-xs sm:text-sm font-medium tracking-wide text-black">recruiting</span>
            </div>
            <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-200 shadow-lg animate-fade-in [animation-delay:600ms] text-center">
              <span className="text-xs sm:text-sm font-medium tracking-wide text-black">process automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
