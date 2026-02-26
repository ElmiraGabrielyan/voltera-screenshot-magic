"use client";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

const CTA = () => {
  const { openModal } = useContactModal();

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-dark-surface text-dark-foreground relative overflow-hidden scroll-mt-20">
      {/* Decorative elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-dark-muted/5 blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-accent/5 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[12vw] sm:text-[10vw] lg:text-[8vw] leading-none font-bold mb-8 sm:mb-10 lg:mb-12" style={{ color: '#DCDCDC' }}>
            ready
            <br />
            when you are.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 px-2">
            <span className="text-dark-foreground font-medium">Let&apos;s talk about your next move.</span>{" "}
            <span className="text-dark-muted">Whether it&apos;s marketing, sales, hiring, or workflow improvement.</span>
          </p>

          <Button
            size="lg"
            className="bg-[#FDF800] hover:bg-[#FDF800]/90 text-black font-medium rounded-full px-6 sm:px-8 mt-8 sm:mt-10 lg:mt-12 text-base sm:text-lg h-12 sm:h-14"
            onClick={openModal}
          >
            Contact
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
