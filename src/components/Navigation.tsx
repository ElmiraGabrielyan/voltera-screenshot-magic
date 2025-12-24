"use client";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";

const Navigation = () => {
  const { openModal } = useContactModal();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative flex items-center justify-between h-20">
          {/* Left Navigation */}
          <div className="flex items-center gap-6 lg:gap-8">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, "#")}
              className="text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors cursor-pointer uppercase"
            >
              Home.
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, "#services")}
              className="text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors cursor-pointer uppercase"
            >
              Services.
            </a>
            <a 
              href="#team" 
              onClick={(e) => handleNavClick(e, "#team")}
              className="text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors cursor-pointer uppercase"
            >
              Team.
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors cursor-pointer uppercase"
            >
              Contact.
            </a>
          </div>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-3xl font-bold tracking-tighter">volterā.</h1>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6 lg:gap-8">
            <a
              href="https://instagram.com"
              className="text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors uppercase"
            >
              IG.
            </a>
            <a href="https://behance.net" className="text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors uppercase">
              IN.
            </a>
            <a
              href="https://dribbble.com"
              className="text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors uppercase"
            >
              FB.
            </a>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-foreground font-medium rounded-full ml-4 lg:ml-6"
              onClick={openModal}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
