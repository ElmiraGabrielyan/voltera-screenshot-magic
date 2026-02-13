"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useContactModal } from "@/contexts/ContactModalContext";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const { openModal } = useContactModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false); 
    
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="relative flex items-center justify-between h-16 sm:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent/10 transition-colors z-10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, "#")}
              className="text-sm lg:text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors cursor-pointer uppercase"
            >
              Home.
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, "#services")}
              className="text-sm lg:text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors cursor-pointer uppercase"
            >
              Services.
            </a>
            <a 
              href="#team" 
              onClick={(e) => handleNavClick(e, "#team")}
              className="text-sm lg:text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors cursor-pointer uppercase"
            >
              Team.
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-sm lg:text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors cursor-pointer uppercase"
            >
              Contact.
            </a>
          </div>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tighter whitespace-nowrap">volterā.</h1>
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            <a
              href=" https://www.instagram.com/voltera.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm lg:text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors uppercase"
            >
              IG.
            </a>
            <a 
              href="https://www.linkedin.com/company/volteraagency/?viewAsMember=true" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm lg:text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors uppercase"
            >
              IN.
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583240265240"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm lg:text-base font-semibold tracking-wide hover:text-muted-foreground transition-colors uppercase"
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

          {/* Mobile Contact Button */}
          <Button 
            size="sm"
            className="lg:hidden bg-accent hover:bg-accent/90 text-foreground font-medium rounded-full text-xs px-3 sm:px-4 z-10"
            onClick={openModal}
          >
            Contact
          </Button>
        </div>

      </div>
      
      {/* Mobile Menu - Outside container for full width */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-background border-b border-border shadow-lg">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col py-4 space-y-3">
              <a 
                href="#" 
                onClick={(e) => handleNavClick(e, "#")}
                className="text-base font-semibold tracking-wide hover:text-accent transition-colors cursor-pointer uppercase py-2 active:text-accent"
              >
                Home.
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, "#services")}
                className="text-base font-semibold tracking-wide hover:text-accent transition-colors cursor-pointer uppercase py-2 active:text-accent"
              >
                Services.
              </a>
              <a 
                href="#team" 
                onClick={(e) => handleNavClick(e, "#team")}
                className="text-base font-semibold tracking-wide hover:text-accent transition-colors cursor-pointer uppercase py-2 active:text-accent"
              >
                Team.
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, "#contact")}
                className="text-base font-semibold tracking-wide hover:text-accent transition-colors cursor-pointer uppercase py-2 active:text-accent"
              >
                Contact.
              </a>
              <div className="flex items-center gap-6 pt-4 border-t border-border">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold tracking-wide hover:text-accent transition-colors uppercase"
                >
                  IG.
                </a>
                <a 
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold tracking-wide hover:text-accent transition-colors uppercase"
                >
                  IN.
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold tracking-wide hover:text-accent transition-colors uppercase"
                >
                  FB.
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
