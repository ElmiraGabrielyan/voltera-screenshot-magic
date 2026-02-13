"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContactModal } from "@/contexts/ContactModalContext";

const Footer = () => {
  const { openModal } = useContactModal();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href === "#contact") {
      openModal();
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Newsletter */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Updates?</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Sign in to our newsletter.</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="jane@framer.com"
                className="rounded-full text-sm"
              />
              <Button 
                size="icon"
                className="rounded-full bg-foreground hover:bg-foreground/90 flex-shrink-0 h-10 w-10 sm:h-11 sm:w-11"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Site map */}
          <div>
            <h4 className="text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4">Site map.</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => handleNavClick(e, "#")}
                  className="text-base sm:text-lg font-medium hover:text-muted-foreground transition-colors cursor-pointer"
                >
                  Home.
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="text-base sm:text-lg font-medium hover:text-muted-foreground transition-colors cursor-pointer"
                >
                  Services.
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  onClick={(e) => handleNavClick(e, "#team")}
                  className="text-base sm:text-lg font-medium hover:text-muted-foreground transition-colors cursor-pointer"
                >
                  Team.
                </a>
              </li>
              <li>
                <button 
                  onClick={openModal}
                  className="text-base sm:text-lg font-medium hover:text-muted-foreground transition-colors text-left"
                >
                  Contact.
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4">Social.</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="https://www.instagram.com/voltera.agency/" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-medium hover:text-muted-foreground transition-colors">IG.</a></li>
              <li><a href="https://www.linkedin.com/company/volteraagency/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-medium hover:text-muted-foreground transition-colors">IN.</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61583240265240" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-medium hover:text-muted-foreground transition-colors">FB.</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p>Made by Volterā.</p>
              <p>Last updated 11/12/25.</p>
              <p>Copyright 2025 volterā. All rights reserved.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
              <a href="#" className="hover:text-foreground transition-colors">Terms of service.</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy policy.</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
